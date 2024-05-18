import { ReactNode } from 'react'

import { Input, Button, InputSelect } from 'uikit'


export const isButton = (child: ReactNode) => {
    if (typeof child !== 'object') {
        return false
    }

    if (!('type' in child)) {
        return false
    }

    if (child.type === Button) {
        return true
    }

    return false
}

export const isInput = (child: ReactNode) => {
    if (typeof child !== 'object') {
        return false
    }

    if (!('type' in child)) {
        return false
    }

    if (child.type === Input) {
        return true
    }

    if (child.type === InputSelect) {
        return true
    }

    return false
}
