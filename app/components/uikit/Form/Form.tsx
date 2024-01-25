import React, {
    Children,
    FormEvent,
    cloneElement,
    isValidElement,
    useCallback,
    useRef,
    useState,
} from 'react'

import Box from './Form.styles'
import { FormErrors, FormValue, FormValues, Props } from './Form.types'
import { isButton, isInput } from './utils'
import { ajv } from 'validations'


const Form = (props: Props) => {
    const { children, initialValues, onSubmit, schema } = props
    const formValuesRef = useRef<FormValues>(initialValues)
    const [formErrors, setFormErrors] = useState<FormErrors>([])
    const validate = useCallback(ajv.compile(schema), [])

    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault()

        const values: FormValues = {}

        for (const prop in formValuesRef.current) {
            values[prop] = formValuesRef.current[prop]
        }

        const isValid = validate(values)

        if (!isValid) {
            const nextErrors: FormErrors = []

            validate.errors.map((item) => {
                nextErrors.push({
                    name: item.instancePath.split('/')[1],
                    message: item.message,
                })
            })

            setFormErrors(nextErrors)

            return
        }

        if (formErrors.length > 0) {
            setFormErrors([])
        }

        onSubmit(values)
    }

    const content = Children.map(children, (child) => {
        if (!isValidElement(child)) return null

        if (isInput(child)) {
            const changeHandler = (name: string) => (value: FormValue) => {
                formValuesRef.current[name] = value
            }

            const findedError = formErrors.find((item) => {
                return item.name === child.props.name
            })

            const props = {
                error: findedError ? findedError.message : '',
                onChange: changeHandler(child.props.name),
                label: child.props.label,
                initialValue: formValuesRef.current[child.props.name],
            }

            return cloneElement(child, props, [])
        }

        if (isButton(child)) {
            return child
        }

        return null
    })

    return <Box onSubmit={submitHandler}>{content}</Box>
}

export default Form
