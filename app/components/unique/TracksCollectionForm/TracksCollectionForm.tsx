import React from 'react'

import { Button, Form, Input } from 'uikit'
import { tracksCollectionFormSchema } from 'schemas'
import { Props } from './TracksCollectionForm.types'


const TracksCollectionForm = (props: Props) => {
    const { initialValues, isLoading, onSubmit } = props
    const defaultValues = {
        name: '',
    }

    return (
        <Form
            initialValues={initialValues || defaultValues}
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
