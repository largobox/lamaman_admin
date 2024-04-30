import { ReactNode } from 'react'

import { Input, Button, Select } from 'uikit'


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

    if (child.type === Select) {
        return true
    }

    return false
}
