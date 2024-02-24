import { Sorting } from 'common-types'
import { OutlinedChevronDownIcon, OutlinedChevronUpIcon } from 'icons'


export const getIconBySortingDirection = (
    sortingName: string,
    currentSorting: Sorting,
) => {
    if (currentSorting.name !== sortingName) {
        return OutlinedChevronUpIcon
    }

    if (currentSorting.direction === null) {
        return OutlinedChevronUpIcon
    }

    if (currentSorting.direction === 'asc') {
        return OutlinedChevronUpIcon
    }

    if (currentSorting.direction === 'desc') {
        return OutlinedChevronDownIcon
    }
}

export const getColorBySortingDirection = (
    sortingName: string,
    currentSorting: Sorting,
) => {
    if (currentSorting.name !== sortingName) {
        return 'neutral'
    }

    if (currentSorting.direction === null) {
        return 'neutral'
    }

    if (currentSorting.direction === 'asc') {
        return 'secondary'
    }

    if (currentSorting.direction === 'desc') {
        return 'secondary'
    }
}
