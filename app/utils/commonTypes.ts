import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { CustomTheme } from 'styled-components'


export type ThemedProps = {
    theme: CustomTheme
}

export type FontSize = {
    base: number
    h1: number
    h2: number
    hint: number
}

type RequestResult =
    | {
          data: object | string | boolean
      }
    | {
          error: FetchBaseQueryError | SerializedError
      }

export type GetRequestErrorMessageSign = (
    result: RequestResult,
) => string | null
