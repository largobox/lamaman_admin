import { FontSize, ThemedProps } from 'common-types'


type Color = 'base' | 'inherit' | 'light'
type Align = 'left' | 'right' | 'center'

export type Props = {
    text: string | number

    align?: Align
    color?: Color
    isCapitalized?: boolean
    variant?: keyof FontSize
}

export type BoxProps = ThemedProps & {
    $align: Align
    $color: Color
    $isCapitalized: boolean
    $variant: keyof FontSize
}
