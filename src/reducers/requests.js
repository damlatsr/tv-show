import { APPEND_NEW_RESULTS } from "../actions";
const initialState = {
  results: [] //sonuçlar results a eklendi.
};

const requests = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_NEW_RESULTS:
      console.log({
        s: state,
        a: action
      });
      return Object.assign({}, state, {
        results: action.results
      });

    default:
      return state;
  }
};

export default requests;
