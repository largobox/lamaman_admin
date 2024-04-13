import React from 'react'

import { Color, ThemedProps } from 'common-types'


export type IconContent = React.FC<React.SVGAttributes<SVGElement>>

export type IconSize = 'small' | 'middle' | 'big' | 'max'

export type Props = {
    color?: Color
    size?: IconSize
}

export type BoxProps = ThemedProps & {
    $color: Color
    $size: IconSize
}
