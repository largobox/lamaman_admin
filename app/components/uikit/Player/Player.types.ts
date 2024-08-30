import { ThemedProps } from 'common-types'


export type TotalProgressBarProps = ThemedProps & {
    $hasError: boolean
}

export type LoadingProgressBarProps = ThemedProps & {
    $hasError: boolean
    $isLoading: boolean
    $width: number
}

export type PlayingProgressBarProps = ThemedProps & {
    $hasError: boolean
    $width: number
}
