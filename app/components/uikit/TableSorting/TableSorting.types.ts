export type SortingDirection = 'asc' | 'desc' | null

export type Props = {
    name: string
    label: string
    onChange: (name: string, sortingDirection: SortingDirection) => void
}
