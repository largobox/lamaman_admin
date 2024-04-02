import React from 'react'

import { Paper } from 'uikit'
import { AuthenticationLayout } from 'layouts'
import { AuthorizationLoginForm } from 'unique'


const AuthorizationLoginPage = () => {
    return (
        <AuthenticationLayout>
            <Paper>
                <AuthorizationLoginForm />
            </Paper>
        </AuthenticationLayout>
    )
}

export default AuthorizationLoginPage
