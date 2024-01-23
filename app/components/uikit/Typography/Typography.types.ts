import { ThemedProps } from 'common-types'


type Size = 'base' | 'h1'
type Color = 'base' | 'inherit'

export type Props = {
    color?: Color
    text: string
    size?: Size
}

export type BoxProps = ThemedProps & {
    $size: Size
    $color: Color
}
