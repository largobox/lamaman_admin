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

export type Sorting<T> = {
    name: T
    direction: SortingDirection
}

export type SortSign<T> = (name: T, sortingDirection: SortingDirection) => void

export type ChangePageSign = (value: number) => void

export type OutputFormData = { [key: string]: string | File }
