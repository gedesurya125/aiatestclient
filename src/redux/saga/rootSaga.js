import {all} from 'redux-saga/effects'
import { getFlickrImagesWatcher } from './watchers/filckrImagesWatcher'

export default function* rootSaga() {
  yield all([
    getFlickrImagesWatcher()
  ])
}