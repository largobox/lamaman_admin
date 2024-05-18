import { Item } from './InputSelect.types'


export const getNextItemId = (currentId: string, items: Item[]) => {
    if (currentId === null) {
        return items[0].id
    }

    const findedIndex = items.findIndex((item) => item.id === currentId)

    if (findedIndex === items.length - 1) {
        return currentId
    }

    return items[findedIndex + 1].id
}

export const getPrevItemId = (currentId: string, items: Item[]) => {
    if (currentId === null) {
        return null
    }

    const findedIndex = items.findIndex((item) => item.id === currentId)

    if (findedIndex === 0) {
        return currentId
    }

    return items[findedIndex - 1].id
}

export const getValueLabel = (currentId: string, items: Item[]) => {
    if (currentId === null) {
        return ''
    }

    const selectedItem = items.find((item) => item.id === currentId)

    return selectedItem.name
}
