import React from 'react'
import { useNavigate } from 'react-router-dom'

import logger from 'logger'
import { useLoginMutation } from 'api'
import { Button, Form, Input, Typography } from 'uikit'
import { FormLayout, FormHeader } from 'layouts'
import { getRequestErrorMessage } from 'utils'
import { loginFormSchema } from 'schemas'
import { addToast } from 'store/slices/toastsSlice'
import { LoginArgs } from 'store/store.types'
import { useAppDispatch, useCurrentUser } from 'hooks'


const TracksCollectionForm = () => {
    const [login, { isLoading }] = useLoginMutation()
    const appDispatch = useAppDispatch()
    const { signIn } = useCurrentUser()
    const navigate = useNavigate()

    const submitHandler = async (values: LoginArgs) => {
        try {
            const result = await login(values)
            const errorMessage = getRequestErrorMessage(result)

            if (errorMessage !== null) {
                appDispatch(
                    addToast({ message: errorMessage, toastType: 'error' }),
                )

                return
            }

            if ('data' in result) {
                signIn(result.data)

                navigate('/')
            }
        } catch (err) {
            logger.error(err)
        }
    }

    const initialValues = {
        login: '',
        password: '',
    }

    return (
        <FormLayout>
            <FormHeader>
                <Typography
                    align='center'
                    size='h1'
                    text='Авторизация'
                />
            </FormHeader>

            <Form
                initialValues={initialValues}
                schema={loginFormSchema}
                onSubmit={submitHandler}
                isLoading={isLoading}
            >
                <Input
                    label='Логин'
                    name='login'
                />

                <Input
                    label='Пароль'
                    name='password'
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
