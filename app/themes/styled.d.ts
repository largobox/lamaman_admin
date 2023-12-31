// импортируем оригинальный модуль
import 'styled-components'


// расширяем этот оригинальный модуль
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: number

        colors: {
            primary: {
                base: string
                dark: string
                light: string
            }
            secondary: {
                base: string
                dark: string
                light: string
            }
            neutral: {
                base: string
                dark: string
                light: string
            }
            danger: {
                base: string
                dark: string
                light: string
            }
            success: {
                base: string
                dark: string
                light: string
            }
            text: {
                base: string
                dark: string
                light: string
            }
            paper: string
        }

        constants: {
            leftPanel: number
        }

        fontSizes: {
            h1: number
            base: number
        }

        spacing: (value: number) => number

        transition: {
            duration: number
        }

        zIndex: {
            modal: number
        }
    }
}
