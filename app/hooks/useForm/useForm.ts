import { useRef, useState } from 'react'

import {
    FormErrors,
    FormValues,
    GetFormValuesSignature,
    ValidateFormSignature,
} from './useForm.types'


const useForm = () => {
    const formValuesRef = useRef<FormValues>({})
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

    const changeFormValue = (name: string) => (value: string) => {
        formValuesRef.current[name] = value
    }

    return {
        changeFormValue,
        getValues,
        validate,
        errors,
    }
}

export default useForm
