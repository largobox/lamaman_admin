import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LOCAL_STORAGE_AUTH_TOKEN } from 'app-utils'
import {
    LoginArgs,
    LoginReturn,
    FindTracksCollectionsReturn,
    FindTracksCollectionsArgs,
} from 'store/store.types'


const isProduction = process.env.NODE_ENV === 'production'
const host = process.env.SERVER_HOST
const port = process.env.SERVER_PORT
const protocol = isProduction ? 'https' : 'http'
const url = `${protocol}://${host}:${port}/api`

const apiSlice = createApi({
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
        findTracksCollections: builder.query<
            FindTracksCollectionsReturn,
            FindTracksCollectionsArgs
        >({
            query: (params) => ({
                url: 'tracks-collections',
                method: 'GET',
                params: {
                    sortingName: params.sorting.name,
                    sortingDirection: params.sorting.direction,
                },
            }),
        }),

        login: builder.mutation<LoginReturn, LoginArgs>({
            query: (data) => ({
                url: 'authentication',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useLoginMutation, useLazyFindTracksCollectionsQuery } = apiSlice

export default apiSlice
