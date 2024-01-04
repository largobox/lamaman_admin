import Ajv from 'ajv'
import ajvErrorsExtension from 'ajv-errors'

import { authTokenPayloadSchema } from './schemas'


export const ajv = new Ajv({ allErrors: true })

ajvErrorsExtension(ajv)

export const validateAuthTokenPayload = ajv.compile(authTokenPayloadSchema)
