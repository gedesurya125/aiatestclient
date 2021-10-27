import * as type from '../actions/actionTypes';

export const getFlickrImagesAction = () => ({type: type.GET_IMAGES});
export const setFlickrImagesAction = (data) => ({type: type.SET_IMAGES, payload: {data}});
export const setLoadingFlickrImagesAction = () => ({type:type.SET_LOADING_IMAGES});
export const unsetLoadingFlickrImagesAction = () => ({type:type.UNSET_LOADING_IMAGES});