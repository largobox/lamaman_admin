import React from 'react'
import { useNavigate } from 'react-router-dom'

import logger from 'logger'
import { useCreateTracksCollectionMutation } from 'api'
import { useAppDispatch } from 'hooks'
import { Button, Form, Input, Typography } from 'uikit'
import { FormLayout } from 'layouts'
import { FormHeader } from 'app/layouts/FormLayout'
import { getRequestErrorMessage } from 'app-utils'
import { tracksCollectionFormSchema } from 'schemas'
import { addToast } from 'store/slices/toastsSlice'
import { CreateTracksCollectionArgs } from 'store/store.types'


const TracksCollectionForm = () => {
    const [сreate, { isLoading }] = useCreateTracksCollectionMutation()
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()
    const initialValues = {
        name: '',
    }

    const submitHandler = async (values: CreateTracksCollectionArgs) => {
        try {
            const result = await сreate(values)
            const errorMessage = getRequestErrorMessage(result)

            if (errorMessage !== null) {
                appDispatch(
                    addToast({ message: errorMessage, toastType: 'error' }),
                )

                return
            }

            if ('data' in result && result.data.id) {
                navigate('/')
            }
        } catch (err) {
            logger.error(err)
        }
    }

    return (
        <FormLayout>
            <FormHeader>
                <Typography
                    size='h1'
                    text='Добавить коллекцию'
                />
            </FormHeader>

            <Form
                initialValues={initialValues}
                schema={tracksCollectionFormSchema}
                onSubmit={submitHandler}
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
        </FormLayout>
    )
}

export default TracksCollectionForm
