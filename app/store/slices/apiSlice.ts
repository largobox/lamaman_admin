// ToDo. Удалить файл после изменения логики
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { LOCAL_STORAGE_AUTH_TOKEN } from 'app-utils'
import {
    // CreateTracksCollectionArgs,
    // CreateTracksCollectionReturn,
    // FindTracksCollectionsReturn,
    // FindTracksCollectionsArgs,
    GetTracksCollectionReturn,
    GetTracksCollectionArgs,
    LoginArgs,
    LoginReturn,
    UpdateTracksCollectionReturn,
    UpdateTracksCollectionArgs,
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
        createTracksCollection: builder.mutation<string, string>({
            query: (data) => ({
                url: 'tracks-collections',
                method: 'POST',
                body: data,
            }),
        }),

        findTracksCollections: builder.query<string, string>({
            query: () => ({
                url: 'tracks-collections',
                method: 'GET',
                params: {},
            }),
        }),

        getTracksCollection: builder.query<
            GetTracksCollectionReturn,
            GetTracksCollectionArgs
        >({
            query: (id) => ({
                url: `tracks-collections/${id}`,
                method: 'GET',
            }),
        }),

        login: builder.mutation<LoginReturn, LoginArgs>({
            query: (data) => ({
                url: 'authentication',
                method: 'POST',
                body: data,
            }),
        }),

        updateTracksCollection: builder.mutation<
            UpdateTracksCollectionReturn,
            UpdateTracksCollectionArgs
        >({
            query: (params) => ({
                url: `tracks-collections/${params.id}`,
                method: 'PUT',
                body: params.data,
            }),
        }),
    }),
})

export const {
    useCreateTracksCollectionMutation,
    useUpdateTracksCollectionMutation,
    useLoginMutation,
    useLazyFindTracksCollectionsQuery,
    useLazyGetTracksCollectionQuery,
} = apiSlice

export default apiSlice
