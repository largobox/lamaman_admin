import { SortSign, Sorting } from 'common-types'


export type TableHeaderItem = {
    name: string
    label: string
    isSortable?: boolean
}

export type Props = {
    items: TableHeaderItem[]
    currentTableSorting: Sorting<string>
    onSort: SortSign<string>
}
