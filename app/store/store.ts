import { configureStore } from '@reduxjs/toolkit'

import authorizationSlice from './slices/authorization'
import performersSlice from './slices/performers'
import playerSlice from './slices/player'
import selectablesSlice from './slices/selectables'
import toastsSlice from './slices/toasts'
import tracksSlice from './slices/tracks'
import tracksCollectionsSlice from './slices/tracksCollections'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        [authorizationSlice.reducerPath]: authorizationSlice.reducer,
        [performersSlice.name]: performersSlice.reducer,
        [playerSlice.name]: playerSlice.reducer,
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
