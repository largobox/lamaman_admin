import React from 'react'

import { Button, Form, Input } from 'uikit'
import { tracksCollectionFormSchema } from 'schemas'
import { Props } from './TracksCollectionForm.types'


const TracksCollectionForm = (props: Props) => {
    const { initialValues, isLoading, onSubmit } = props

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
