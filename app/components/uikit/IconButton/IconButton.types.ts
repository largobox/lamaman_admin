import { Color, ThemedProps } from 'common-types'
import { Props as IconProps, IconSize } from 'icons/Icon/Icon.types'


export type Props = {
    Icon: React.FC<IconProps>
    onClick: () => void

    color?: Color
    size?: IconSize
    isDisabled?: boolean
}

export type BoxProps = ThemedProps & {
    onClick: () => void
    $color: Color
    $isDisabled: boolean
}
