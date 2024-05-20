import React, { ChangeEventHandler, useRef } from 'react'

import Box, { FileName, IconBox, ValueBox } from './InputFile.styles'
import { Props } from './InputFile.types'
import { ErrorMessage, Label } from 'uikit'
import { FileIcon } from 'icons'


const InputFile = (props: Props) => {
    const { label, onChange } = props
    const inputFileRef = useRef()
    const error = ''
    const fileName = 'Некий файл.mp3'

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        onChange(ev.target.value)
    }

    return (
        <Box>
            <Label>{label}</Label>

            <ValueBox tabIndex={0}>
                <FileName>{fileName}</FileName>
            </ValueBox>

            <input
                onChange={changeHandler}
                ref={inputFileRef}
                type='file'
                hidden
            />

            <IconBox>
                <FileIcon color='neutral' />
            </IconBox>

            <ErrorMessage>{error}</ErrorMessage>
        </Box>
    )
}

export default InputFile
