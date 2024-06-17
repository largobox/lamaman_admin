import { SelectableItem } from 'store/selectables.types'


export const getNextItemId = (currentId: string, items: SelectableItem[]) => {
    if (currentId === null) {
        return items[0].id
    }

    const findedIndex = items.findIndex((item) => item.id === currentId)

    if (findedIndex === items.length - 1) {
        return currentId
    }

    return items[findedIndex + 1].id
}

export const getPrevItemId = (currentId: string, items: SelectableItem[]) => {
    if (currentId === null) {
        return items[0].id
    }

    const findedIndex = items.findIndex((item) => item.id === currentId)

    if (findedIndex === 0) {
        return currentId
    }

    return items[findedIndex - 1].id
}

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

export const getValueLabel = (selectedId: string, items: SelectableItem[]) => {
    const selectedItem = items.find((item) => item.id === selectedId)

    return selectedItem.name
}
