import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "DO_STUFF":
      return { ...state, ...action.payload };
    case "CONFIRM":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
