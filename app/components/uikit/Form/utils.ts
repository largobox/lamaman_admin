import { ReactNode } from 'react'

import { Input, Button, InputSelect, InputFile } from 'uikit'
import { FormErrors } from './Form.types'


export const getErrorMesssageByInputName = (
    errors: FormErrors,
    name: string,
) => {
    // текст ошибки для инпута с файлом
    const findedFileInputError = errors.find((item) => {
        return item.message.includes('must have required property')
    })

    if (findedFileInputError && findedFileInputError.name === undefined) {
        return 'Обязательное'
    }

    // текст ошибки для обычного инпута
    const findedError = errors.find((item) => {
        return item.name === name
    })

    const errorMessage = findedError ? findedError.message : ''

    return errorMessage
}

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

    if (child.type === InputFile) {
        return true
    }

    if (child.type === Input) {
        return true
    }

    if (child.type === InputSelect) {
        return true
    }

    return false
}
