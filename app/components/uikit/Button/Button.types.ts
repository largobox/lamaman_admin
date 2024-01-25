import { ThemedProps } from 'common-types'


export type Props = {
    label: string

    fullWidth?: boolean
    onClick?: () => void
}

export type BoxProps = ThemedProps & {
    $fullWidth: boolean
}
