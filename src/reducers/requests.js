import {RECEIVE_NEW_SEARCH, RESULT_READY} from '../actions'

const initialState = {
  searchMessage: '',
  results: [],
  readyResult: false
}

const requests = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_NEW_SEARCH:
      return Object.assign({}, state, {
        searchMessage: action.searchMessage
        
      })
    case RESULT_READY:
      console.log(action)
      return Object.assign({}, state, {
        results: action.results,
        readyResult: true
      })
    default:
      return state
  }
}
  
export default requests;
