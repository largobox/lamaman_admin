import { all } from 'redux-saga/effects'

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
    ])
}

export default rootSaga
