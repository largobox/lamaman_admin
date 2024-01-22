import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { defaultTheme } from 'themes'
import { CategoriesListPage, LoginPage, NotFound, TracksListPage } from 'pages'
import { CurrentUserProvider } from 'hooks/useCurrentUser'
import { ProtectedRoute } from 'uikit'


const router = createBrowserRouter([
    {
        path: '/categories',
        element: (
            <ProtectedRoute>
                <CategoriesListPage />
            </ProtectedRoute>
        ),
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
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <Navigate to='/categories' />,
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
                <RouterProvider router={router} />
            </CurrentUserProvider>
        </ThemeProvider>
    )
}

export default App
