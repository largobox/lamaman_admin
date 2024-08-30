import { all } from 'redux-saga/effects'

import { loginAuthorizationWatcherSaga } from './authorization'
import { downloadFileWatcherSaga } from './files'
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
import {
    getTrackDescriptionPlayerWatcherSaga,
    getTrackFilePartPlayerWatcherSaga,
} from './player'


function* rootSaga() {
    yield all([
        loginAuthorizationWatcherSaga(),

        downloadFileWatcherSaga(),

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

        getTrackDescriptionPlayerWatcherSaga(),
        getTrackFilePartPlayerWatcherSaga(),
    ])
}

export default rootSaga
