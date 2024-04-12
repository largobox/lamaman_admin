import { configureStore } from '@reduxjs/toolkit'

import apiSlice from './slices/apiSlice'
import toastsSlice from './slices/toastsSlice'
import tracksCollectionsSlice from './slices/tracksCollectionsSlice'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import router from 'router'


const sagaMiddleware = createSagaMiddleware()

sagaMiddleware.setContext({ router })

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [toastsSlice.name]: toastsSlice.reducer,
        [tracksCollectionsSlice.name]: tracksCollectionsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            apiSlice.middleware, // ToDo убрать
            sagaMiddleware,
        ]),
})

sagaMiddleware.run(rootSaga)

export default store
