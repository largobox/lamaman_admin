import { CustomTheme } from 'styled-components'


type Size = 'base' | 'h1'
type Color = 'base' | 'inherit'

export type Props = {
    color?: Color
    text: string
    size?: Size
}

export type BoxProps = {
    theme: CustomTheme
    $size: Size
    $color: Color
}
