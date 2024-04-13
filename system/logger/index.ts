import { LoggerErrorParams } from './logger.types'


const logger = {
    error: (params: LoggerErrorParams) => {
        const { error, layer, functionName } = params

        console.error('Error: ', {
            error,
            layer: layer || null,
            functionName: functionName || null,
        })
    },

    info: (message: string) => {
        console.log('Info: ', { message })
    },
}

export default logger
