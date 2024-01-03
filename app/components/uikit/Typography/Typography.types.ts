import { CustomTheme } from "styled-components"

type FontSize = 'base' | 'h1'

export type Props = {
    text: string
    size?: FontSize
}

export type BoxProps = {
    theme: CustomTheme
    $size: FontSize
}