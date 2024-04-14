import { all } from 'redux-saga/effects'

import { loginAuthorizationWatcherSaga } from './authorization'
import {
    createTracksCollectionWatcherSaga,
    deleteTracksCollectionWatcherSaga,
    findTracksCollectionsWatcherSaga,
    getTracksCollectionsWatcherSaga,
    updateTracksCollectionWatcherSaga,
} from './tracksCollections'


function* rootSaga() {
    yield all([
        createTracksCollectionWatcherSaga(),
        deleteTracksCollectionWatcherSaga(),
        findTracksCollectionsWatcherSaga(),
        getTracksCollectionsWatcherSaga(),
        updateTracksCollectionWatcherSaga(),

        loginAuthorizationWatcherSaga(),
    ])
}

export default rootSaga
