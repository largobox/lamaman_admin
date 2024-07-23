import { all } from 'redux-saga/effects'

import { loginAuthorizationWatcherSaga } from './authorization'
import {
    findSelectablePerformersWatcherSaga,
    findSelectableTracksCollectionsWatcherSaga,
} from './selectables'
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
import { playPlayerWatcherSaga } from './player'


function* rootSaga() {
    yield all([
        loginAuthorizationWatcherSaga(),

        findSelectableTracksCollectionsWatcherSaga(),
        findSelectablePerformersWatcherSaga(),

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

        playPlayerWatcherSaga(),
    ])
}

export default rootSaga
