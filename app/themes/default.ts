import { CustomTheme } from 'styled-components';


const spacing = (value: number) => {
    return 4 * value
}

const theme: CustomTheme = {
    borderRadius: 4,

    colors: {
        primary: {
            base: '#009BB3',
            light: '',
            dark: '',
        },

        secondary: {
            base: '#F36B59',
            light: '',
            dark: '',
        },

        neutral: {
            base: '#9FA5B7',
            light: '#C9CEDB',
            dark: '#A7ABB7',
        },

        danger: {
            base: '',
            dark: '',
            light: '',
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
    },

    spacing,

    transition: {
        duration: 500
    },

    zIndex: {
        modal: 1,
    },
}

export default theme
