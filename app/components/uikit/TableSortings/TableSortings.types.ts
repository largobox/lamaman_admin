import { SortHandlerSign, Sorting } from 'common-types'


export type TableSortingsItem = {
    name: string
    label: string
}

export type Props = {
    items: TableSortingsItem[]
    currentTableSorting: Sorting
    onSort: SortHandlerSign
}
