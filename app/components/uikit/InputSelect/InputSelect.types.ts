import { ThemedProps } from 'common-types'
import { SelectableItem } from 'store/selectables.types'


export type Props = {
    label: string
    name: string
    isLoading: boolean
    items: SelectableItem[]
    initialMetaData: SelectableItem | SelectableItem[]

    initialValue?: string | string[]
    isMultiselectable?: boolean
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
