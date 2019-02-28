/* ./src/js/store.js */
import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"
// This will import "./reducers/index.js"

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
