import { PropsWithChildren } from 'react'


export type Props = PropsWithChildren & {
    onClose: () => void
}

export type BoxProps = {
    $isVisible: boolean
}
