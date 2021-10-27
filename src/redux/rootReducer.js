import { combineReducers } from "redux";
import flickrImageReducer from "./reducers/flickrImagesReducer";

const rootReducer = combineReducers({
  flickrImages: flickrImageReducer
});

export default rootReducer;