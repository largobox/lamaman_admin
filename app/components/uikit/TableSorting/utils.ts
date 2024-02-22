import { OutlinedChevronDownIcon, OutlinedChevronUpIcon } from 'icons'
import { SortingDirection } from './TableSorting.types'


export const getIconBySortingDirection = (
    sortingDirection: SortingDirection,
) => {
    if (sortingDirection === null) {
        return OutlinedChevronUpIcon
    }

    if (sortingDirection === 'asc') {
        return OutlinedChevronUpIcon
    }

    if (sortingDirection === 'desc') {
        return OutlinedChevronDownIcon
    }
}

export const getColorBySortingDirection = (
    sortingDirection: SortingDirection,
) => {
    if (sortingDirection === null) {
        return 'neutral'
    }

    if (sortingDirection === 'asc') {
        return 'secondary'
    }

    if (sortingDirection === 'desc') {
        return 'secondary'
    }
}
