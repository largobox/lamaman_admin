import { configureStore } from '@reduxjs/toolkit'

import apiSlice from './slices/apiSlice'
import toastsSlice from './slices/toastsSlice'


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [toastsSlice.name]: toastsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
