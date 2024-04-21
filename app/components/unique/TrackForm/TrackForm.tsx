import React, { useEffect } from 'react'

import { Button, Form, Input } from 'uikit'
import { trackFormSchema } from 'schemas'
import { Props } from './TrackForm.types'
import { useAppDispatch } from 'hooks'
import { resetForm } from 'store/slices/tracksSlice'


const TrackForm = (props: Props) => {
    const { initialValues, isLoading, onSubmit } = props
    const appDispatch = useAppDispatch()

    useEffect(() => {
        return () => {
            appDispatch(resetForm())
        }
    }, [])

    return (
        <Form
            initialValues={initialValues}
            schema={trackFormSchema}
            onSubmit={onSubmit}
            isLoading={isLoading}
        >
            <Input
                label='Наименование'
                name='name'
            />

            <Button
                fullWidth
                label='Отправить'
            />
        </Form>
    )
}

export default TrackForm
