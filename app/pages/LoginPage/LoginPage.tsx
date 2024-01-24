import React from 'react'

import { Button, Input, Paper, Typography } from 'uikit'
import { AuthenticationLayout, FormLayout } from 'layouts'
import { FormHeader } from 'app/layouts/FormLayout'
import useForm from 'hooks/useForm'


const LoginPage = () => {
    const { changeFormValue, getValues } = useForm()

    const sendHandler = () => {
        const formValues = getValues()

        console.log('formValues', formValues)
    }

    return (
        <AuthenticationLayout>
            <Paper>
                <FormLayout>
                    <FormHeader>
                        <Typography size='h2' text='Авторизация' />
                    </FormHeader>

                    <Input
                        label='Логин'
                        initialValue=''
                        onChange={changeFormValue('login')}
                    />

                    <Input
                        label='Пароль'
                        initialValue=''
                        onChange={changeFormValue('password')}
                    />

                    <Button fullWidth label='Отправить' onClick={sendHandler} />
                </FormLayout>
            </Paper>
        </AuthenticationLayout>
    )
}

export default LoginPage
