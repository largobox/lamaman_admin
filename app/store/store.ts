import { configureStore } from '@reduxjs/toolkit'

import authorizationSlice from './slices/authorizationSlice'
import toastsSlice from './slices/toastsSlice'
import tracksCollectionsSlice from './slices/tracksCollectionsSlice'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        [authorizationSlice.reducerPath]: authorizationSlice.reducer,
        [toastsSlice.name]: toastsSlice.reducer,
        [tracksCollectionsSlice.name]: tracksCollectionsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([sagaMiddleware]),
})

sagaMiddleware.run(rootSaga)

export default store
