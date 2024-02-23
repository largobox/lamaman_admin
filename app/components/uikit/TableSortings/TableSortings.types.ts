import { SortHandlerSign, TableSorting } from 'common-types'


export type TableSortingsItem = {
    name: string
    label: string
}

export type Props = {
    items: TableSortingsItem[]
    currentTableSorting: TableSorting
    onSort: SortHandlerSign
}
