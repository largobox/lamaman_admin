import React, { ChangeEventHandler } from 'react'

import Box, { InputElement, Label } from './Input.styles'
import { Props } from './Input.types'


const Input = (props: Props) => {
    const { initialValue, onChange, label } = props

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        onChange(ev.target.value)
    }

    return (
        <Box>
            <Label>{label}</Label>

            <InputElement
                defaultValue={initialValue}
                onChange={changeHandler}
            />
        </Box>
    )
}

export default Input
