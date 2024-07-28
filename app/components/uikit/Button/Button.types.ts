import { ThemedProps } from 'common-types'


type ButtonColor = 'primary' | 'secondary'

export type Props = {
    label: string

    color?: ButtonColor
    fullWidth?: boolean
    onClick?: () => void
}

export type BoxProps = ThemedProps & {
    $color: ButtonColor
    $fullWidth: boolean
}
