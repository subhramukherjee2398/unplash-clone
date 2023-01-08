import { ActionTypes } from "../contants/action-types";

export const setRecommand = (images) => {
  return {
    type: ActionTypes.RECOMMANDED_PHOTOS,
    payload: images,
  };
};

export const setSearch = (images) => {
  return {
    type: ActionTypes.SEARCH_PHOTOS,
    payload: images,
  };
};
