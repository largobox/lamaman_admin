import { FontSize, ThemedProps } from 'common-types'


type Color = 'base' | 'inherit'

export type Props = {
    color?: Color
    text: string
    size?: keyof FontSize
}

export type BoxProps = ThemedProps & {
    $size: keyof FontSize
    $color: Color
}
