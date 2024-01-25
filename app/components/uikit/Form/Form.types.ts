import { ReactNode } from 'react'


export type FormValue = string

export type FormValues = {
    [key: string]: FormValue
}

export type FormSubmitSignature = (values: FormValues) => void

export type Props = {
    children: Array<ReactNode>
    initialValues: FormValues
    // ToDo. need normal type
    schema: {
        [key: string]: string | number | boolean
    }
    onSubmit: FormSubmitSignature
}
