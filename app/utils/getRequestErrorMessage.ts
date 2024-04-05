import { GetRequestErrorMessageSign } from 'common-types'


const getRequestErrorMessage: GetRequestErrorMessageSign = (result) => {
    const hasErrorProp = 'error' in result

    if (!hasErrorProp) return null

    if (result.error === undefined) return null

    if ('status' in result.error && result.error.status === 422) {
        return 'Серверная ошибка. Код 422'
    }

    if ('status' in result.error && result.error.status === 404) {
        return 'Серверная ошибка. Ресурс не найден'
    }

    if ('status' in result.error && result.error.status === 'FETCH_ERROR') {
        return 'Серверная ошибка. Ошибка запроса'
    }

    if ('status' in result.error && result.error.status === 'TIMEOUT_ERROR') {
        return 'Серверная ошибка. Превышено время ожидания запроса'
    }

    if ('status' in result.error) {
        return 'Серверная ошибка'
    }

    if (
        'data' in result.error &&
        typeof result.error.data === 'object' &&
        'message' in result.error.data
    ) {
        return String(result.error.data.message)
    }

    return null
}

export default getRequestErrorMessage
