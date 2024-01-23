import React from 'react'

import { Paper, Typography } from 'uikit'
import { AuthenticationLayout } from 'layouts'


const LoginPage = () => {
    return (
        <AuthenticationLayout>
            <Paper>
                <Typography text='LoginPage' />
            </Paper>
        </AuthenticationLayout>
    )
}

export default LoginPage
