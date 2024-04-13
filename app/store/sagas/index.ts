import { all } from 'redux-saga/effects'

import { loginAuthorizationWatcherSaga } from './authorization'
import {
    createTracksCollectionWatcherSaga,
    findTracksCollectionsWatcherSaga,
    getTracksCollectionsWatcherSaga,
    updateTracksCollectionWatcherSaga,
} from './tracksCollections'


function* rootSaga() {
    yield all([
        createTracksCollectionWatcherSaga(),
        findTracksCollectionsWatcherSaga(),
        getTracksCollectionsWatcherSaga(),
        updateTracksCollectionWatcherSaga(),

        loginAuthorizationWatcherSaga(),
    ])
}

export default rootSaga
