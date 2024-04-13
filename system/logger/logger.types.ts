export type LoggerErrorParams = {
    error: Error
    functionName?: string
    layer?: 'api' | 'saga' // ToDo. Взять значения строк из констант
}
