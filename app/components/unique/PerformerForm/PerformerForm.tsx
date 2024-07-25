import React, { useEffect } from 'react'

import { Button, Form, Input } from 'uikit'
import { performerFormSchema } from 'schemas'
import { Props } from './PerformerForm.types'
import { useAppDispatch, useAppSelector } from 'hooks'
import { formInitialValuesSelector, resetForm } from 'store/slices/performers'


const PerformerForm = (props: Props) => {
    const { isLoading, onSubmit } = props
    const initialValues = useAppSelector(formInitialValuesSelector)
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
