import * as type from '../actions/actionTypes';

const initialState = {
  data: {
    title: "",
    link: "",
    description: "",
    modified: "",
    generator: "",
    items: []
  },
  loading: false
}


const flickrImageReducer = (state= initialState, action) => {
  switch(action.type){
    case type.SET_IMAGES: return {
      ...state,
      data: action.payload.data
    };
    case type.SET_LOADING_IMAGES: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_IMAGES: return {
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default flickrImageReducer;