import { all } from 'redux-saga/effects'

import { loginAuthorizationWatcherSaga } from './authorization'
import { findSelectableTracksCollectionsWatcherSaga } from './selectables'
import {
    createPerformerWatcherSaga,
    deletePerformerWatcherSaga,
    findPerformersWatcherSaga,
    getPerformerWatcherSaga,
    updatePerformerWatcherSaga,
} from './performers'
import {
    createTracksCollectionWatcherSaga,
    deleteTracksCollectionWatcherSaga,
    findTracksCollectionsWatcherSaga,
    getTracksCollectionWatcherSaga,
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
        loginAuthorizationWatcherSaga(),

        findSelectableTracksCollectionsWatcherSaga(),

        createPerformerWatcherSaga(),
        deletePerformerWatcherSaga(),
        findPerformersWatcherSaga(),
        getPerformerWatcherSaga(),
        updatePerformerWatcherSaga(),

        createTracksCollectionWatcherSaga(),
        deleteTracksCollectionWatcherSaga(),
        findTracksCollectionsWatcherSaga(),
        getTracksCollectionWatcherSaga(),
        updateTracksCollectionWatcherSaga(),

        createTrackWatcherSaga(),
        deleteTrackWatcherSaga(),
        findTracksWatcherSaga(),
        getTrackWatcherSaga(),
        updateTrackWatcherSaga(),
    ])
}

export default rootSaga
