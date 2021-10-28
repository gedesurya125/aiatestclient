import { takeLatest } from "redux-saga/effects";
import * as types from '../../actions/actionTypes';
import { getFlickrImagesByTagsWorker, getFlickrImagesWorker } from "../workers/flickrImagesWorker";

export function* getFlickrImagesWatcher() {
  yield takeLatest(types.GET_IMAGES, getFlickrImagesWorker);
}

export function* getFlickrImagesByTagsWatcher() {
  yield takeLatest(types.GET_IMAGES_BY_TAGS, getFlickrImagesByTagsWorker);
}

