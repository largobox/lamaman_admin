import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from './slices/api'


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,

        // [categoriesSliceSlice.name]: categoriesSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
