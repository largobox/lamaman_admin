import React from 'react'

import { Paper, Typography } from 'uikit'
import { FormHeader, FormLayout } from 'layouts'
import { AuthorizationLoginForm } from 'unique'
import { useAppDispatch, useAppSelector } from 'hooks'
import { isLoadingSelector, login } from 'store/slices/authorization'
import { AuthorizationLoginFormValues } from 'store/authorization.types'


const AuthorizationLoginPage = () => {
    const appDispatch = useAppDispatch()
    const isLoading = useAppSelector(isLoadingSelector)

    const submitHandler = async (values: AuthorizationLoginFormValues) => {
        appDispatch(login({ data: values }))
    }

    return (
        <Paper>
            <FormLayout>
                <FormHeader>
                    <Typography
                        align='center'
                        variant='h1'
                        text='Авторизация'
                    />
                </FormHeader>

                <AuthorizationLoginForm
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />
            </FormLayout>
        </Paper>
    )
}

export default AuthorizationLoginPage
