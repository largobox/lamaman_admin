import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LOCAL_STORAGE_AUTH_TOKEN } from 'app-utils'
import { LoginArgs, LoginReturn } from './api.types'


const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const url = `https://${host}:${port}/api`

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        prepareHeaders: (headers) => {
            const authToken = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

            if (authToken) {
                headers.set('authorization', authToken)
            }

            return headers
        },
    }),

    endpoints: (builder) => ({
        // Authentication
        login: builder.mutation<LoginReturn, LoginArgs>({
            query: (data) => ({
                url: 'authentication',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useLoginMutation } = apiSlice
