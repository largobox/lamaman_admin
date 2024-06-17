import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'

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
    getNextItemId,
    getPrevItemId,
    getInitialValueLabel,
    getValueLabel,
} from './utils'
import { SelectIcon, CrossIcon } from 'icons'
import { SelectableItem } from 'store/selectables.types'


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
    const [hoveredValue, setHoveredValue] = useState<string>(null)
    const [isListVisible, setIsListVisible] = useState(false)
    const isEnterPressed = useKeyPress('Enter')
    const isUpPressed = useKeyPress('ArrowUp')
    const isDownPressed = useKeyPress('ArrowDown')
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

        if (isUpPressed && isListVisible) {
            const nextHoveredValue = getPrevItemId(hoveredValue, items)

            setHoveredValue(nextHoveredValue)

            return
        }

        if (isDownPressed && isListVisible) {
            const nextHoveredValue = getNextItemId(hoveredValue, items)

            setHoveredValue(nextHoveredValue)

            return
        }

        if (isEnterPressed && isListVisible && hoveredValue) {
            onChange(hoveredValue)

            setValue(hoveredValue)
            setValueLabel(getValueLabel(hoveredValue, items))
            setIsListVisible(false)
            setHoveredValue(null)

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
    }, [isEnterPressed, isUpPressed, isDownPressed])

    const blurHandler = () => {
        setIsListVisible(false)
    }

    const clickHandler = () => {
        setIsListVisible(!isListVisible)
    }

    const spinnerClickHandler: MouseEventHandler = (ev) => {
        if (isSelectLoading) {
            ev.stopPropagation()
        }
    }

    const mouseEnterHandler = (nextHoveredValue: string) => () => {
        setHoveredValue(nextHoveredValue)
    }

    const mouseLeaveHandler = () => {
        setHoveredValue(null)
    }

    const removeHandler = () => {
        console.log('Remove')
    }

    const selectHandler = (nextValue: string) => () => {
        onChange(nextValue)

        setValue(nextValue)
        setValueLabel(getValueLabel(hoveredValue, items))
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
                    <SpinnerBox onClick={spinnerClickHandler}>
                        <Spinner size='small' />
                    </SpinnerBox>
                )}

                {!isSelectLoading && (
                    <>
                        {isValueLabelVisible && <Value>{valueLabel}</Value>}

                        {isListVisible && (
                            <List onMouseLeave={mouseLeaveHandler}>
                                {items.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        onClick={selectHandler(item.id)}
                                        onMouseEnter={mouseEnterHandler(
                                            item.id,
                                        )}
                                        $isHovered={hoveredValue === item.id}
                                        $isSelected={value === item.id}
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
                                onClick={removeHandler}
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
