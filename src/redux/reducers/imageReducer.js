import { ActionTypes } from "../contants/action-types";

let initialState = [];

export const imageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.RECOMMANDED_PHOTOS:
      return payload;
    case ActionTypes.SEARCH_PHOTOS:
      return payload;
    default:
      return state;
  }
};
