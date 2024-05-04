import React, { useEffect } from 'react'

import { Button, Form, Input } from 'uikit'
import { performerFormSchema } from 'schemas'
import { Props } from './PerformerForm.types'
import { useAppDispatch } from 'hooks'
import { resetForm } from 'store/slices/performersSlice'


const PerformerForm = (props: Props) => {
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
            schema={performerFormSchema}
            onSubmit={onSubmit}
            isLoading={isLoading}
        >
            <Input
                label='Имя'
                name='name'
            />

            <Button
                fullWidth
                label='Отправить'
            />
        </Form>
    )
}

export default PerformerForm
