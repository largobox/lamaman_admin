import { FontSize, ThemedProps } from 'common-types'


type Color = 'base' | 'inherit' | 'light'
type Align = 'left' | 'right' | 'center'

export type Props = {
    text: string

    align?: Align
    color?: Color
    isBold?: boolean
    isCapitalized?: boolean
    size?: keyof FontSize
}

export type BoxProps = ThemedProps & {
    $align: Align
    $color: Color
    $isBold: boolean
    $isCapitalized: boolean
    $size: keyof FontSize
}
