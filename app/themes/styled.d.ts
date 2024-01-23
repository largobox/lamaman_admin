// импортируем оригинальный модуль
import 'styled-components'

import { FontSize } from 'common-types'

// расширяем этот оригинальный модуль
declare module 'styled-components' {
    export interface CustomTheme {
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

            base: string
            dark: string
            light: string
            paper: string
        }

        constants: {
            leftPanel: number
        }

        fontSizes: FontSize

        shadow: {
            base: string
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
