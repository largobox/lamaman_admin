import { GetRequestErrorMessageSign } from 'common-types'


const getRequestErrorMessage: GetRequestErrorMessageSign = (result) => {
    const hasErrorProp = 'error' in result

    if (!hasErrorProp) return null

    if (result.error === undefined) return null

    if ('status' in result.error && result.error.status === 422) {
        return 'Серверная ошибка. Код 422'
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
