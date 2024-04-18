import React from 'react'

import { Paper, Typography } from 'uikit'
import { AuthenticationLayout, FormHeader, FormLayout } from 'layouts'
import { AuthorizationLoginForm } from 'unique'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    formValuesSelector,
    isLoadingSelector,
    login,
} from 'store/slices/authorizationSlice'
import { AuthorizationLoginFormValues } from 'store/authorization.types'


const AuthorizationLoginPage = () => {
    const appDispatch = useAppDispatch()
    const initialValues = useAppSelector(formValuesSelector)
    const isLoading = useAppSelector(isLoadingSelector)

    const submitHandler = async (values: AuthorizationLoginFormValues) => {
        appDispatch(login({ data: values }))
    }

    return (
        <AuthenticationLayout>
            <Paper>
                <FormLayout>
                    <FormHeader>
                        <Typography
                            align='center'
                            size='h1'
                            text='Авторизация'
                        />
                    </FormHeader>

                    <AuthorizationLoginForm
                        initialValues={initialValues}
                        onSubmit={submitHandler}
                        isLoading={isLoading}
                    />
                </FormLayout>
            </Paper>
        </AuthenticationLayout>
    )
}

export default AuthorizationLoginPage
