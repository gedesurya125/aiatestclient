import { takeLatest } from "redux-saga/effects";
import * as types from '../../actions/actionTypes';
import { getFlickrImagesWorker } from "../workers/flickrImagesWorker";

export function* getFlickrImagesWatcher() {
  yield takeLatest(types.GET_IMAGES, getFlickrImagesWorker);
}
