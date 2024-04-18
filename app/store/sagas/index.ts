import { all } from 'redux-saga/effects'

import { loginAuthorizationWatcherSaga } from './authorization'
import {
    createTracksCollectionWatcherSaga,
    deleteTracksCollectionWatcherSaga,
    findTracksCollectionsWatcherSaga,
    getTracksCollectionsWatcherSaga,
    updateTracksCollectionWatcherSaga,
} from './tracksCollections'
import {
    createTrackWatcherSaga,
    deleteTrackWatcherSaga,
    findTracksWatcherSaga,
    getTrackWatcherSaga,
    updateTrackWatcherSaga,
} from './tracks'


function* rootSaga() {
    yield all([
        createTracksCollectionWatcherSaga(),
        deleteTracksCollectionWatcherSaga(),
        findTracksCollectionsWatcherSaga(),
        getTracksCollectionsWatcherSaga(),
        updateTracksCollectionWatcherSaga(),

        createTrackWatcherSaga(),
        deleteTrackWatcherSaga(),
        findTracksWatcherSaga(),
        getTrackWatcherSaga(),
        updateTrackWatcherSaga(),

        loginAuthorizationWatcherSaga(),
    ])
}

export default rootSaga
