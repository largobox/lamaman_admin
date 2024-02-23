import { FontSize, ThemedProps } from 'common-types'


type Color = 'base' | 'inherit' | 'light'

export type Props = {
    text: string

    color?: Color
    size?: keyof FontSize
    isBold?: boolean
    isCapitalized?: boolean
}

export type BoxProps = ThemedProps & {
    $size: keyof FontSize
    $color: Color
    $isBold: boolean
    $isCapitalized: boolean
}
