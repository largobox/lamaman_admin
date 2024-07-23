export type LoggerErrorParams = {
    error: Error
    functionName?: string
    layer?: 'api' | 'saga'
}
