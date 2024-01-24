import { ThemedProps } from 'common-types'


export type Props = {
    label: string
    fullWidth?: boolean
}

export type BoxProps = ThemedProps & {
    $fullWidth: boolean
}
