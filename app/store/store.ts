import { configureStore } from '@reduxjs/toolkit'

import authorizationSlice from './slices/authorizationSlice'
import performersSlice from './slices/performersSlice'
import selectablesSlice from './slices/selectablesSlice'
import toastsSlice from './slices/toastsSlice'
import tracksSlice from './slices/tracksSlice'
import tracksCollectionsSlice from './slices/tracksCollectionsSlice'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        [authorizationSlice.reducerPath]: authorizationSlice.reducer,
        [performersSlice.name]: performersSlice.reducer,
        [selectablesSlice.name]: selectablesSlice.reducer,
        [toastsSlice.name]: toastsSlice.reducer,
        [tracksSlice.name]: tracksSlice.reducer,
        [tracksCollectionsSlice.name]: tracksCollectionsSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                /*
                    Чтобы не выкидывалась ошибка
                    при передачи в стор объектов типа File
                */
                ignoredActionPaths: ['payload.data.file'],
            },
        }).concat([sagaMiddleware]),
})

sagaMiddleware.run(rootSaga)

export default store
