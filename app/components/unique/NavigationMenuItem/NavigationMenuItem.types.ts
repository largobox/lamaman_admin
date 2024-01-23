import { ThemedProps } from 'common-types'


export type Props = {
    label: string
    value: string
}

export type BoxProps = ThemedProps & {
    $isSelected: boolean
}
