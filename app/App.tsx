import React from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { defaultTheme } from 'themes'
import { store } from 'store'
import { ErrorBoundary, Toasts } from 'unique'
import router from 'router'


const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ErrorBoundary>
                <Provider store={store}>
                    <RouterProvider router={router} />

                    <Toasts />
                </Provider>
            </ErrorBoundary>
        </ThemeProvider>
    )
}

export default App
