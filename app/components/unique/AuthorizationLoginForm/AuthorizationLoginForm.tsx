import React from 'react'

import { Button, Form, Input } from 'uikit'
import { loginFormSchema } from 'schemas'
import { Props } from './AuthorizationLoginForm.types'


const AuthorizationLoginForm = (props: Props) => {
    const { initialValues, isLoading, onSubmit } = props

    return (
        <Form
            initialValues={initialValues}
            schema={loginFormSchema}
            onSubmit={onSubmit}
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
    )
}

export default AuthorizationLoginForm
