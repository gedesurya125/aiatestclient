import {all} from 'redux-saga/effects'
import { getFlickrImagesByTagsWatcher, getFlickrImagesWatcher } from './watchers/filckrImagesWatcher'

export default function* rootSaga() {
  yield all([
    getFlickrImagesWatcher(),
    getFlickrImagesByTagsWatcher(),
  ])
}