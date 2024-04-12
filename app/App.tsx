import React from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { defaultTheme } from 'themes'
import { CurrentUserProvider } from 'hooks/useCurrentUser'
import { store } from 'store'
import { Toasts } from 'unique'
import router from 'router'


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
