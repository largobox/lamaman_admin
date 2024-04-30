import { ThemedProps } from 'common-types'


type Size = 'small' | 'middle'

export type Props = {
    size?: Size
}

export type SpinProps = ThemedProps & {
    $size?: Size
}
