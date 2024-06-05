import { FileMetaData } from 'common-types'
import { ReactNode } from 'react'


export type FormValue = string | File | FileMetaData

export type FormValues = {
    [key: string]: FormValue
}

export type FormErrors = Array<{
    name: string
    message: string
}>

export type FormSubmitSignature = (values: FormValues) => void

export type Props = {
    children: Array<ReactNode>
    initialValues: FormValues
    schema: object
    onSubmit: FormSubmitSignature

    isLoading?: boolean
}

export type FormWrapperProps = {
    $isLoading: boolean
}
