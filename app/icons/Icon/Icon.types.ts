import React from 'react'

import { ThemedProps } from 'common-types'


export type IconContent = React.FC<React.SVGAttributes<SVGElement>>

type IconColor = 'primary' | 'light' | 'danger'

export type IconSize = 'small' | 'middle' | 'big' | 'max'

export type Props = {
    color?: IconColor
    size?: IconSize
}

export type BoxProps = ThemedProps & {
    $color: IconColor
    $size: IconSize
}
