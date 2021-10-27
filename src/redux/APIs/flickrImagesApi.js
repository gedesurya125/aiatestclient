import { baseAPI } from "./setup";

export const getFlickrImages = () => baseAPI.get("/images");
export const getFlickrImagesByTags = (tags) => baseAPI.get("/images", {
  params:{
    tags
  }
})