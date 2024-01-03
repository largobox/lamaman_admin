import React from 'react'
import { AppLayout } from 'layouts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'themes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CategoriesListPage, NotFound, TracksListPage } from 'pages'


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/categories',
                element: <CategoriesListPage />,
            },
            {
                path: '/tracks',
                element: <TracksListPage />,
            },
            {
                path: '/*',
                element: <NotFound />,
            },
        ],
    },
])

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
