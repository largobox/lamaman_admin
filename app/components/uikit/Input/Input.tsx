import React, { ChangeEventHandler } from 'react'

import Box, { ErrorMessage, InputElement, Label } from './Input.styles'
import { Props } from './Input.types'


const Input = (props: Props) => {
    const { initialValue, onChange, label, error = '' } = props

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        onChange(ev.target.value)
    }

    return (
        <Box>
            <Label>{label}</Label>

            <InputElement
                defaultValue={initialValue}
                onInput={changeHandler}
            />

            <ErrorMessage>{error}</ErrorMessage>
        </Box>
    )
}

export default Input
