import React, {
    Children,
    FormEvent,
    cloneElement,
    isValidElement,
    useRef,
} from 'react'

import Box from './Form.styles'
import { FormValue, FormValues, Props } from './Form.types'
import { isButton, isInput } from './utils'


const Form = (props: Props) => {
    const { children, initialValues, onSubmit } = props
    const formValuesRef = useRef<FormValues>(initialValues)

    const submitHandler = (ev: FormEvent) => {
        ev.preventDefault()

        const values: FormValues = {}

        for (const prop in formValuesRef.current) {
            values[prop] = formValuesRef.current[prop]
        }

        onSubmit(values)
    }

    const content = Children.map(children, (child) => {
        if (!isValidElement(child)) return null

        if (isInput(child)) {
            const changeHandler = (name: string) => (value: FormValue) => {
                formValuesRef.current[name] = value
            }

            const props = {
                onChange: changeHandler(child.props.name),
                label: child.props.label,
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
