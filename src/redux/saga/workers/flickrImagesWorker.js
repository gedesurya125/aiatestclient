import {put, call} from 'redux-saga/effects';
import { setFlickrImagesAction, setLoadingFlickrImagesAction, unsetLoadingFlickrImagesAction } from '../../actions/flickrImagesActions';
import { getFlickrImages } from '../../APIs/flickrImagesApi';

export function* getFlickrImagesWorker(){
  try{
    yield put(setLoadingFlickrImagesAction());
    const response = yield call(getFlickrImages);
    if(response.data){
      yield put(setFlickrImagesAction(response.data));
      yield put(unsetLoadingFlickrImagesAction());
    }else{
      yield put(unsetLoadingFlickrImagesAction());
      console.log('GOT UNKNOWN DATA STRUCTURE, DETAILS:', response);
    }
  }catch(err){
    console.log('ERR ON GETTING IMAGES DATA', err);
    yield put(unsetLoadingFlickrImagesAction());
  }
}