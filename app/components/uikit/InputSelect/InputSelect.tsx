import React, { MouseEvent, useEffect, useRef, useState } from 'react'

import Box, {
    IconBox,
    ListItem,
    RemovableValue,
    RemovableValueBox,
    RemovableValuesBox,
    SpinnerBox,
    ValueBox,
} from './InputSelect.styles'
import { Props } from './InputSelect.types'
import { ErrorMessage, IconButton, Label, Spinner } from 'uikit'
import { Value, List } from './InputSelect.styles'
import { useKeyPress, useOutsideClick } from 'hooks'
import {
    getNextItem,
    getPrevItem,
    getInitialValueLabel,
    getNextValueLabel,
    getNextValue,
    isListItemHovered,
    isListItemSelected,
} from './utils'
import { SelectIcon, CrossIcon } from 'icons'
import { SelectableItem } from 'store/selectables.types'

/*
  ToDo

  3. Валидация ошибки при 0 консультаций
  4. При мульти в области значения что-то писать, например, "Выбрано: 3"
*/
const InputSelect = (props: Props) => {
    const {
        initialValue,
        initialMetaData,
        onChange,
        label,
        error = '',
        items,
        isMultiselectable = false,
        isLoading,
    } = props
    const ref = useRef()
    const [value, setValue] = useState<string | string[]>(initialValue || null)
    const [hoveredValue, setHoveredValue] = useState<SelectableItem>(null)
    const [isListVisible, setIsListVisible] = useState(false)
    const isEnterPressed = useKeyPress('Enter')
    const isUpPressed = useKeyPress('ArrowUp')
    const isDownPressed = useKeyPress('ArrowDown')
    const isLeftPressed = useKeyPress('ArrowLeft')
    const [valueLabel, setValueLabel] = useState<SelectableItem[] | string>(
        null,
    )
    const isSelectLoading = isLoading || items === null
    const tabIndex = isSelectLoading ? -1 : 0
    const isValueLabelVisible =
        !isMultiselectable && typeof valueLabel === 'string'
    const isMultiValueLabelVisible =
        isMultiselectable && Array.isArray(valueLabel)

    useOutsideClick(ref, () => {
        setIsListVisible(false)
        setHoveredValue(null)
    })

    useEffect(() => {
        setValueLabel(getInitialValueLabel(initialMetaData))
    }, [initialMetaData])

    useEffect(() => {
        setValue(initialValue || null)
    }, [initialValue])

    useEffect(() => {
        if (ref.current !== document.activeElement) {
            return
        }

        if (isLeftPressed && isListVisible) {
            setHoveredValue(null)
            setIsListVisible(false)
        }

        if (isUpPressed && isListVisible) {
            const nextHoveredValue = getPrevItem(hoveredValue, items)

            setHoveredValue(nextHoveredValue)

            return
        }

        if (isDownPressed && isListVisible) {
            const nextHoveredValue = getNextItem(hoveredValue, items)

            setHoveredValue(nextHoveredValue)

            return
        }

        if (isEnterPressed && isListVisible && hoveredValue) {
            const nextValue = getNextValue(hoveredValue.id, value)

            onChange(nextValue)

            setValue(nextValue)
            setValueLabel(getNextValueLabel(hoveredValue, valueLabel))

            if (!isMultiselectable) {
                setHoveredValue(null)
                setIsListVisible(false)
            }

            return
        }

        if (isEnterPressed && isListVisible && hoveredValue === null) {
            setIsListVisible(false)

            return
        }

        if (isEnterPressed && !isListVisible) {
            setIsListVisible(true)

            return
        }
    }, [isEnterPressed, isUpPressed, isDownPressed, isLeftPressed])

    const blurHandler = () => {
        setIsListVisible(false)
    }

    const clickHandler = (event: MouseEvent) => {
        const targetEl = event.target as HTMLDivElement
        const isListInClickArea =
            targetEl.parentElement.getAttribute('data-islist')

        if (isMultiselectable && isListInClickArea) {
            return
        }

        setIsListVisible(!isListVisible)
    }

    const clickSpinnerHandler = (ev: MouseEvent) => {
        if (isSelectLoading) {
            ev.stopPropagation()
        }
    }

    const mouseEnterHandler = (nextHoveredValue: SelectableItem) => () => {
        setHoveredValue(nextHoveredValue)
    }

    const mouseLeaveHandler = () => {
        setHoveredValue(null)
    }

    const removeHandler = (removedItem: SelectableItem) => () => {
        const nextValue = getNextValue(removedItem.id, value)

        onChange(nextValue)

        setValue(nextValue)
        setValueLabel(getNextValueLabel(removedItem, valueLabel))
    }

    const selectHandler = (selectedValue: SelectableItem) => () => {
        const nextValue = getNextValue(selectedValue.id, value)

        onChange(nextValue)

        setValue(nextValue)
        setValueLabel(getNextValueLabel(hoveredValue, valueLabel))

        if (isMultiselectable) {
            return
        }

        setHoveredValue(null)
    }

    return (
        <Box>
            <Label>{label}</Label>

            <ValueBox
                ref={ref}
                onBlur={blurHandler}
                tabIndex={tabIndex}
                onClick={clickHandler}
                $isDisabled={isSelectLoading}
            >
                {isSelectLoading && (
                    <SpinnerBox onClick={clickSpinnerHandler}>
                        <Spinner size='small' />
                    </SpinnerBox>
                )}

                {!isSelectLoading && (
                    <>
                        {isValueLabelVisible && <Value>{valueLabel}</Value>}

                        {isListVisible && (
                            <List
                                data-islist
                                onMouseLeave={mouseLeaveHandler}
                            >
                                {items.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        onClick={selectHandler(item)}
                                        onMouseEnter={mouseEnterHandler(item)}
                                        $isHovered={isListItemHovered(
                                            hoveredValue,
                                            item.id,
                                        )}
                                        $isSelected={isListItemSelected(
                                            value,
                                            item.id,
                                        )}
                                    >
                                        {item.name}
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </>
                )}
            </ValueBox>

            {isMultiValueLabelVisible && (
                <RemovableValuesBox>
                    {valueLabel.map((item) => (
                        <RemovableValueBox key={item.id}>
                            <RemovableValue>{item.name}</RemovableValue>

                            <IconButton
                                onClick={removeHandler(item)}
                                Icon={CrossIcon}
                                size='extrasmall'
                                color='neutral'
                            />
                        </RemovableValueBox>
                    ))}
                </RemovableValuesBox>
            )}

            <IconBox>
                <SelectIcon color='neutral' />
            </IconBox>

            <ErrorMessage>{error}</ErrorMessage>
        </Box>
    )
}

export default InputSelect
