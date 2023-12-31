import React from "react"
import { AppLayout } from "layouts"
import { Typography } from "uikit"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "themes"


const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AppLayout>
                <Typography
                    text="This is App"
                />
            </AppLayout>
        </ThemeProvider>
    )
}

export default App
