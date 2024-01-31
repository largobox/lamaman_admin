import React from 'react'

import { Button, Form, Input, Paper, Typography } from 'uikit'
import { AuthenticationLayout, FormLayout } from 'layouts'
import { FormHeader } from 'app/layouts/FormLayout'
import { loginFormSchema } from 'schemas'
import { useLoginMutation } from 'api'
import { LoginArgs } from 'store/store.types'
import logger from 'logger'
import { useAppDispatch } from 'hooks'
import { addToast } from 'store/slices/toastsSlice'
import { getRequestErrorMessage } from 'app-utils'


const LoginPage = () => {
    const [login, { isLoading }] = useLoginMutation()
    const appDispatch = useAppDispatch()

    const submitHandler = async (values: LoginArgs) => {
        try {
            const result = await login(values)
            const errorMessage = getRequestErrorMessage(result)

            if (errorMessage !== null) {
                appDispatch(
                    addToast({ message: errorMessage, toastType: 'error' }),
                )
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
        <AuthenticationLayout>
            <Paper>
                <FormLayout>
                    <FormHeader>
                        <Typography
                            size='h2'
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
            </Paper>
        </AuthenticationLayout>
    )
}

export default LoginPage