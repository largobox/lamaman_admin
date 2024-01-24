import { ThemedProps } from 'common-types'


export type Props = {
    label: string
    onClick: () => void

    fullWidth?: boolean
}

export type BoxProps = ThemedProps & {
    $fullWidth: boolean
}
