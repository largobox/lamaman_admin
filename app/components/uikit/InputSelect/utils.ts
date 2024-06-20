import { SelectableItem } from 'store/selectables.types'


export const getInitialValueLabel = (
    initialMetaData: SelectableItem | SelectableItem[],
) => {
    if (initialMetaData === null) {
        return ''
    }

    if (Array.isArray(initialMetaData)) {
        return initialMetaData
    }

    if (typeof initialMetaData === 'object') {
        return initialMetaData.name
    }
}

export const getNextItem = (
    currentItem: SelectableItem,
    items: SelectableItem[],
) => {
    if (currentItem === null) {
        return items[0]
    }

    const findedIndex = items.findIndex((item) => item.id === currentItem.id)

    if (findedIndex === items.length - 1) {
        return currentItem
    }

    return items[findedIndex + 1]
}

export const getNextValue = (
    newId: string,
    currentValue: string | string[] | null,
) => {
    if (typeof currentValue === 'string' || currentValue === null) {
        return newId
    }

    const findedId = currentValue.find((id) => id === newId)

    if (findedId) {
        return currentValue.filter((id) => id !== findedId)
    }

    const nextValue = currentValue.map((id) => id)

    nextValue.push(newId)

    return nextValue
}

export const getNextValueLabel = (
    selectedItem: SelectableItem,
    currentValueLabel: string | SelectableItem[],
) => {
    if (typeof currentValueLabel === 'string') {
        return selectedItem.name
    }

    const findedItem = currentValueLabel.find(
        (item) => item.id === selectedItem.id,
    )

    if (findedItem) {
        return currentValueLabel.filter((item) => item.id !== findedItem.id)
    }

    const nextValueLabel = currentValueLabel.map((item) => ({
        id: item.id,
        name: item.name,
    }))

    nextValueLabel.push(selectedItem)

    return nextValueLabel
}

export const getPrevItem = (
    currentItem: SelectableItem,
    items: SelectableItem[],
) => {
    if (currentItem === null) {
        return items[0]
    }

    const findedIndex = items.findIndex((item) => item.id === currentItem.id)

    if (findedIndex === 0) {
        return currentItem
    }

    return items[findedIndex - 1]
}

export const getSelectedItemsAmount = (value: string | string[]) => {
    if (Array.isArray(value)) {
        return `Выбрано: ${value.length}`
    }

    return null
}

export const isListItemHovered = (
    currentHoveredValue: SelectableItem,
    id: string,
) => {
    if (currentHoveredValue === null) return false

    return currentHoveredValue.id === id
}

export const isListItemSelected = (
    currentValue: string | string[],
    id: string,
) => {
    if (currentValue === null) return false

    if (typeof currentValue === 'string') {
        return currentValue === id
    }

    return currentValue.includes(id)
}
