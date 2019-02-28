/* ./src/js/reducers/index.js */
import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  tweets,
  user,
})
