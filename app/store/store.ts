import { configureStore } from '@reduxjs/toolkit'

import apiSlice from './slices/apiSlice'
import toastsSlice from './slices/toastsSlice'
import tracksCollectionsSlice from './slices/tracksCollectionsSlice'


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [toastsSlice.name]: toastsSlice.reducer,
        [tracksCollectionsSlice.name]: tracksCollectionsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
