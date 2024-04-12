export type LoggerErrorParams = {
    error: Error
    layer: 'api' | 'saga' // ToDo. Взять значения строк из констант
}
