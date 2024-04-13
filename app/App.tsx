import React from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { defaultTheme } from 'themes'
import { store } from 'store'
import { Toasts } from 'unique'
import router from 'router'


const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Provider store={store}>
                <RouterProvider router={router} />

                <Toasts />
            </Provider>
        </ThemeProvider>
    )
}

export default App
