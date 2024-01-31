import { CustomTheme } from 'styled-components'


const spacing = (value: number) => {
    return 4 * value
}

const theme: CustomTheme = {
    borderRadius: 4,

    colors: {
        primary: {
            base: '#009BB3',
            light: '#62BAC8',
            dark: '#16707E',
        },

        secondary: {
            base: '#F36B59',
            light: '',
            dark: '',
        },

        neutral: {
            base: '#9FA5B7',
            light: '#C9CEDB',
            dark: '#5C616D;',
        },

        danger: {
            base: '#c73e3e',
            dark: '#b22727',
            light: '#f78a8a',
        },

        success: {
            base: '',
            dark: '',
            light: '',
        },

        base: '#619D9D',
        dark: '#2F4F4F',
        light: '#FFFFFF',
        paper: '#E1D7CE',
    },

    constants: {
        leftPanel: 260,
    },

    fontSizes: {
        base: 16,
        h1: 24,
        h2: 20,
        hint: 12,
    },

    iconSizes: {
        small: 16,
        middle: 24,
        big: 62,
    },

    shadow: {
        base: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
    },

    spacing,

    transition: {
        duration: 500,
    },

    zIndex: {
        modal: 1,
    },
}

export default theme
