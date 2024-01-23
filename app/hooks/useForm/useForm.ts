import { useRef, useState } from 'react'

import {
    FormErrors,
    FormValues,
    GetFormValuesSignature,
    Props,
    ValidateFormSignature,
} from './useForm.types'


const useForm = (props: Props) => {
    const { initialValues } = props
    const formValuesRef = useRef<FormValues>(initialValues)
    const [errors, setErrors] = useState<FormErrors>({})

    const getValues: GetFormValuesSignature = () => {
        const values: FormValues = {}

        for (const prop in formValuesRef.current) {
            values[prop] = formValuesRef.current[prop]
        }

        return values
    }

    const validate: ValidateFormSignature = () => {
        const isValid = true

        if (!isValid) {
            setErrors({})
        }

        return isValid
    }

    return {
        getValues,
        validate,
        errors,
    }
}

export default useForm
