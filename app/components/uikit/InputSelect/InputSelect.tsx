import React, {
    MouseEvent,
    useEffect,
    useRef,
    useState,
    KeyboardEvent,
    ChangeEvent,
} from 'react'

import Box, {
    IconBox,
    ListItem,
    ListSpinnerBox,
    MoreBtnBox,
    Placeholder,
    RemovableValue,
    RemovableValueBox,
    RemovableValuesBox,
    SearchInputBox,
    SpinnerBox,
    ValueBox,
} from './InputSelect.styles'
import { Props } from './InputSelect.types'
import {
    Button,
    ErrorMessage,
    IconButton,
    InputElement,
    Label,
    Spinner,
} from 'uikit'
import { Value, List } from './InputSelect.styles'
import {
    useDebounceCallback,
    useEscapeKeyPress,
    useKeyPress,
    useOutsideClick,
} from 'hooks'
import {
    getNextItem,
    getPrevItem,
    getInitialValueLabel,
    getNextValueLabel,
    getNextValue,
    isListItemHovered,
    isListItemSelected,
    getSelectedItemsAmount,
} from './utils'
import { SelectIcon, CrossIcon, SearchIcon } from 'icons'
import { SelectableItem } from 'store/selectables.types'


const InputSelect = (props: Props) => {
    const {
        initialValue,
        initialMetaData,
        onChange,
        onSearch,
        label,
        error = '',
        items, // ToDo. Нужно др структура для доп. загрузки
        isMultiselectable = false,
        isLoading,
        isSearchable = false,
    } = props
    const ref = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const searchInputBoxRef = useRef<HTMLDivElement>(null)
    const searchInputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string | string[]>(initialValue || null)
    const [searchValue, setSearchValue] = useState<string>('')
    const [hoveredValue, setHoveredValue] = useState<SelectableItem>(null)
    const [isListVisible, setIsListVisible] = useState(false)
    const [valueLabel, setValueLabel] = useState<SelectableItem[] | string>(
        null,
    )
    const isEnterPressed = useKeyPress('Enter')
    const isUpPressed = useKeyPress('ArrowUp')
    const isDownPressed = useKeyPress('ArrowDown')
    const isLeftPressed = useKeyPress('ArrowLeft')
    const isSelectLoading = isLoading || items === null
    const tabIndex = isSelectLoading ? -1 : 0
    const isValueLabelVisible =
        !isMultiselectable && typeof valueLabel === 'string'
    const isMultiValueLabelVisible =
        isMultiselectable && Array.isArray(valueLabel)
    const isPlaceholderVisible = isMultiselectable
    const selectedItemsAmount = getSelectedItemsAmount(value)
    const isMoreBtnVisible = false // ToDo

    useDebounceCallback(() => {
        if (typeof onSearch === 'function') {
            onSearch(searchValue)
        }
    }, searchValue)

    useEscapeKeyPress(
        () => {
            if (isSearchable) {
                ref.current.focus()
            }

            setIsListVisible(false)
        },
        isListVisible ? 2 : 0,
    )

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
        const isActiveElementValid =
            (!isSearchable && document.activeElement === ref.current) ||
            (isSearchable &&
                (document.activeElement === ref.current ||
                    document.activeElement === searchInputRef.current))

        if (!isActiveElementValid) {
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

                ref.current.focus()
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

    useEffect(() => {
        if (!isSearchable) {
            return
        }

        if (isListVisible) {
            searchInputRef.current.focus()
        }
    }, [isListVisible])

    const blurHandler = () => {
        if (isSearchable) {
            return
        }

        setIsListVisible(false)
    }

    const changeSearchHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(ev.target.value)
    }

    const clickHandler = (ev: MouseEvent) => {
        const targetEl = ev.target as HTMLDivElement
        const isListArea =
            listRef.current !== null && listRef.current.contains(targetEl)
        const isSearchInputBoxArea =
            searchInputBoxRef.current !== null &&
            searchInputBoxRef.current.contains(targetEl)

        if (isSearchInputBoxArea || (isMultiselectable && isListArea)) {
            return
        }

        setIsListVisible(!isListVisible)
    }

    const clickSpinnerHandler = (ev: MouseEvent) => {
        if (isSelectLoading) {
            ev.stopPropagation()
        }
    }

    const keyDownSearchInputHandler = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            ev.preventDefault()
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

                        {isPlaceholderVisible && (
                            <Placeholder>{selectedItemsAmount}</Placeholder>
                        )}

                        {isListVisible && (
                            <List
                                ref={listRef}
                                onMouseLeave={mouseLeaveHandler}
                            >
                                {isSearchable && (
                                    <SearchInputBox ref={searchInputBoxRef}>
                                        <SearchIcon color='secondary' />

                                        <InputElement
                                            ref={searchInputRef}
                                            onChange={changeSearchHandler}
                                            onKeyDown={
                                                keyDownSearchInputHandler
                                            }
                                            placeholder='Поиск'
                                        />
                                    </SearchInputBox>
                                )}

                                {isSearchable && isSelectLoading && (
                                    <ListSpinnerBox>
                                        <Spinner />
                                    </ListSpinnerBox>
                                )}

                                {!isSelectLoading &&
                                    items.map((item) => (
                                        <ListItem
                                            key={item.id}
                                            onClick={selectHandler(item)}
                                            onMouseEnter={mouseEnterHandler(
                                                item,
                                            )}
                                            $isHovered={isListItemHovered(
                                                hoveredValue,
                                                item.id,
                                            )}
                                            $isSearchable={isSearchable}
                                            $isSelected={isListItemSelected(
                                                value,
                                                item.id,
                                            )}
                                        >
                                            {item.name}
                                        </ListItem>
                                    ))}

                                {isMoreBtnVisible && (
                                    <MoreBtnBox>
                                        <Button
                                            fullWidth
                                            label='Ещё'
                                            color='secondary'
                                        />
                                    </MoreBtnBox>
                                )}
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
