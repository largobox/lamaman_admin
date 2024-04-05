import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { defaultTheme } from 'themes'
import {
    TracksCollectionAddPage,
    TracksCollectionsListPage,
    AuthorizationLoginPage,
    NotFound,
    TracksListPage,
    TracksCollectionEditPage,
} from 'pages'
import { CurrentUserProvider } from 'hooks/useCurrentUser'
import { ProtectedRoute } from 'uikit'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Toasts } from 'unique'


const router = createBrowserRouter([
    {
        path: '/tracks-collections',
        element: (
            <ProtectedRoute>
                <TracksCollectionsListPage />
            </ProtectedRoute>
        ),
        children: [
            {
                path: 'add',
                element: <TracksCollectionAddPage />,
            },
            {
                path: ':id/edit',
                element: <TracksCollectionEditPage />,
            },
        ],
    },
    {
        path: '/tracks',
        element: (
            <ProtectedRoute>
                <TracksListPage />
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: <AuthorizationLoginPage />,
    },
    {
        path: '/',
        element: <Navigate to='/tracks-collections' />,
    },
    {
        path: '/*',
        element: <NotFound />,
    },
])

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CurrentUserProvider>
                <Provider store={store}>
                    <RouterProvider router={router} />

                    <Toasts />
                </Provider>
            </CurrentUserProvider>
        </ThemeProvider>
    )
}

export default App
