import { GetRequestErrorMessageSign } from 'common-types'


const getRequestErrorMessage: GetRequestErrorMessageSign = (result) => {
    if (
        'error' in result &&
        'data' in result.error &&
        typeof result.error.data === 'object' &&
        'message' in result.error.data
    ) {
        return String(result.error.data.message)
    }

    return null
}

export default getRequestErrorMessage
