import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'

import Box, { ListItem, SpinnerBox, ValueBox } from './Select.styles'
import { Props } from './Select.types'
import { ErrorMessage, Label, Spinner } from 'uikit'
import { Value, List } from './Select.styles'
import { useKeyPress, useOutsideClick } from 'hooks'
import { getNextItemId, getPrevItemId, getValueLabel } from './utils'


const Select = (props: Props) => {
    const {
        initialValue,
        onChange,
        label,
        error = '',
        items,
        isLoading,
    } = props
    const ref = useRef()
    const [value, setValue] = useState(initialValue || null)
    const [hoveredValue, setHoveredValue] = useState(null)
    const [isListVisible, setIsListVisible] = useState(false)
    const isEnterPressed = useKeyPress('Enter')
    const isUpPressed = useKeyPress('ArrowUp')
    const isDownPressed = useKeyPress('ArrowDown')
    const valueLabel = getValueLabel(value, items)
    const isSelectLoading = isLoading || items === null
    const tabIndex = isSelectLoading ? -1 : 0

    useOutsideClick(ref, () => {
        setIsListVisible(false)
        setHoveredValue(null)
    })

    useEffect(() => {
        if (ref.current !== document.activeElement) {
            return
        }

        if (isUpPressed && isListVisible) {
            const nextHoveredValue = getPrevItemId(hoveredValue || value, items)

            setHoveredValue(nextHoveredValue)

            return
        }

        if (isDownPressed && isListVisible) {
            const nextHoveredValue = getNextItemId(hoveredValue || value, items)

            setHoveredValue(nextHoveredValue)

            return
        }

        if (isEnterPressed && isListVisible && hoveredValue) {
            onChange(hoveredValue)

            setValue(hoveredValue)
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

    const selectHandler = (nextValue: string) => () => {
        onChange(nextValue)

        setValue(nextValue)
        setHoveredValue(null)
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

    return (
        <Box>
            <Label>{label}</Label>

            <Value
                ref={ref}
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
                        <ValueBox>{valueLabel}</ValueBox>

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
            </Value>

            <ErrorMessage>{error}</ErrorMessage>
        </Box>
    )
}

export default Select
