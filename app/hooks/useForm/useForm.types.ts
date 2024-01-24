export type FormValues = {
    [key: string]: string | number | boolean
}

export type GetFormValuesSignature = () => FormValues

export type ValidateFormSignature = () => boolean

export type FormErrors = {
    [key: string]: string
}
