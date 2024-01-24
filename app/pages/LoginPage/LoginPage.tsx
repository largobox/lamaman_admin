import React from 'react'

import { Button, Input, Paper, Typography } from 'uikit'
import { AuthenticationLayout, FormLayout } from 'layouts'
import { FormHeader } from 'app/layouts/FormLayout'


const LoginPage = () => {
    return (
        <AuthenticationLayout>
            <Paper>
                <FormLayout>
                    <FormHeader>
                        <Typography size='h2' text='Авторизация' />
                    </FormHeader>

                    <Input />

                    <Input />

                    <Button fullWidth label='Отправить' />
                </FormLayout>
            </Paper>
        </AuthenticationLayout>
    )
}

export default LoginPage
