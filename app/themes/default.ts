import { DefaultTheme } from 'styled-components';


const spacing = (value: number) => {
    return 4 * value
}

const theme: DefaultTheme = {
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
            base: '#DFE5B3',
            light: '',
            dark: '#CBDAA4',
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
  
        text: {
            base: '',
            dark: '',
            light: '',
        },
  
        paper: '#CCCCCC',
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
