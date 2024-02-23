import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { CustomTheme } from 'styled-components'


export type ThemedProps = {
    theme: CustomTheme
}

export type Color =
    | 'primary'
    | 'light'
    | 'danger'
    | 'neutral'
    | 'secondary'
    | 'success'
    | 'base'
    | 'dark'

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

export type SortingDirection = 'asc' | 'desc' | null

export type TableSorting = {
    name: string
    direction: SortingDirection
}

export type SortHandlerSign = (
    name: string,
    sortingDirection: SortingDirection,
) => void
