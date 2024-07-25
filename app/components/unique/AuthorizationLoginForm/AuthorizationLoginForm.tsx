import React from 'react'

import { Button, Form, Input } from 'uikit'
import { loginFormSchema } from 'schemas'
import { Props } from './AuthorizationLoginForm.types'
import { useAppSelector } from 'hooks'
import { formInitialValuesSelector } from 'store/slices/authorization'


const AuthorizationLoginForm = (props: Props) => {
    const { isLoading, onSubmit } = props
    const initialValues = useAppSelector(formInitialValuesSelector)

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
