import { ThemedProps } from 'common-types'


export type LoadingProgressBarProps = ThemedProps & {
    $isLoading: boolean
    $width: number
}

export type PlayingProgressBarProps = ThemedProps & {
    $width: number
}
