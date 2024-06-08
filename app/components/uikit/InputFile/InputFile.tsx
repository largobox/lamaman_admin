import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react'

import Box, {
    FileDescription,
    FileName,
    IconBox,
    LabelBox,
    ValueBox,
} from './InputFile.styles'
import { Props } from './InputFile.types'
import { ErrorMessage, Label } from 'uikit'
import { FileIcon } from 'icons'
import { useKeyPress } from 'hooks'
import getFileDescription from './utils'


const InputFile = (props: Props) => {
    const { label, onChange, error = '', initialMetaData } = props
    const inputFileRef = useRef(null)
    const valueBoxRef = useRef(null)
    const [fileName, setFileName] = useState(initialMetaData?.name || null)
    const isEnterPressed = useKeyPress('Enter')
    const [fileDescription, setFileDescription] = useState(
        getFileDescription(initialMetaData),
    )

    useEffect(() => {
        setFileName(initialMetaData?.name || null)
        setFileDescription(getFileDescription(initialMetaData))
    }, [initialMetaData])

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
        setFileDescription(getFileDescription(ev.target.files[0]))

        onChange(ev.target.files[0])
    }

    const clickHandler = () => {
        inputFileRef.current.click()
    }

    return (
        <Box>
            <LabelBox>
                <Label>{label}</Label>

                <FileDescription>{fileDescription}</FileDescription>
            </LabelBox>

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
