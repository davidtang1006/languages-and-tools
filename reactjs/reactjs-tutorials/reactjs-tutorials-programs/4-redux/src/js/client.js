/* ./src/js/client.js */
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware" // New

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FOO_PENDING": { // Instead of "FETCH_USERS_START"
      return {...state, fetching: true}
      break;
    }
    case "FOO_REJECTED": { // "Instead of FETCH_USERS_ERROR"
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FOO_FULFILLED": { // Instead of "RECEIVE_USERS"
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      break;
    }
  }
  return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducer, middleware);

store.dispatch({
  type: "FOO", // Or to be clearer, "FETCH_USERS"
  payload: axios.get("http://rest.learncodeabc.academy/api/wstern/users")
  // The payload is of the type "promise"
})