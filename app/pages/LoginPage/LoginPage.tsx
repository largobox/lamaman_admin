import React from 'react'

import { Button, Form, Input, Paper, Typography } from 'uikit'
import { AuthenticationLayout, FormLayout } from 'layouts'
import { FormHeader } from 'app/layouts/FormLayout'
import { FormValues } from 'app/components/uikit/Form/Form.types'


const schema = {}

const LoginPage = () => {
    const submitHandler = (values: FormValues) => {
        console.log('formValues', values)
    }

    const initialValues = {}

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
                        schema={schema}
                        onSubmit={submitHandler}
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
