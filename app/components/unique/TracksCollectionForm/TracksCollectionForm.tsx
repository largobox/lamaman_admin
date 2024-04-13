import React, { useEffect } from 'react'

import { Button, Form, Input } from 'uikit'
import { tracksCollectionFormSchema } from 'schemas'
import { Props } from './TracksCollectionForm.types'
import { useAppDispatch } from 'hooks'
import { resetForm } from 'store/slices/tracksCollectionsSlice'


const TracksCollectionForm = (props: Props) => {
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
            schema={tracksCollectionFormSchema}
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

export default TracksCollectionForm
