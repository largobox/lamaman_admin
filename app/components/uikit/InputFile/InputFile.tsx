import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react'

import Box, { FileName, IconBox, ValueBox } from './InputFile.styles'
import { Props } from './InputFile.types'
import { ErrorMessage, Label } from 'uikit'
import { FileIcon } from 'icons'
import { useKeyPress } from 'hooks'


const InputFile = (props: Props) => {
    const { label, onChange, error = '' } = props
    const inputFileRef = useRef(null)
    const valueBoxRef = useRef(null)
    const [fileName, setFileName] = useState('')
    const isEnterPressed = useKeyPress('Enter')

    useEffect(() => {
        if (valueBoxRef.current !== document.activeElement) {
            return
        }

        if (isEnterPressed) {
            inputFileRef.current.click()
        }
    }, [isEnterPressed])

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (ev) => {
        if (ev.target.files.length === 0) {
            return
        }

        setFileName(ev.target.files[0].name)
        onChange(ev.target.files[0])
    }

    const clickHandler = () => {
        inputFileRef.current.click()
    }

    return (
        <Box>
            <Label>{label}</Label>

            <ValueBox
                ref={valueBoxRef}
                onClick={clickHandler}
                tabIndex={0}
            >
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
