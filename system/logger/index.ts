import { LoggerErrorParams } from './logger.types'


const logger = {
    error: (params: LoggerErrorParams) => {
        const { error, layer } = params

        console.error('Error: ', { error, layer })
    },

    info: (message: string) => {
        console.log('Info: ', { message })
    },
}

export default logger
