const logger = {
    error: (error: Error) => {
        console.error('Error: ', { error })
    },

    info: (message: string) => {
        console.log('Info: ', { message })
    },
}

export default logger
