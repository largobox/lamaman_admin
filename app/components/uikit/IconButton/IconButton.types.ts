import { Color, ThemedProps } from 'common-types'
import { Props as IconProps } from 'icons/Icon/Icon.types'


export type Props = {
    Icon: React.FC<IconProps>
    onClick: () => void

    color?: Color
}

export type BoxProps = ThemedProps & {
    onClick: () => void
    $color: Color
}
