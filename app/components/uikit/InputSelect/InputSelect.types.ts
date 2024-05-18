import { ThemedProps } from 'common-types'


export type Item = {
    id: string
    name: string
}

export type Props = {
    label: string
    name: string
    isLoading: boolean
    items: Item[]

    initialValue?: string
    error?: string
    onChange?: (value: string) => void
}

export type ListItemProps = ThemedProps & {
    $isSelected: boolean
    $isHovered: boolean
}

export type ValueProps = ThemedProps & {
    $isDisabled: boolean
}
