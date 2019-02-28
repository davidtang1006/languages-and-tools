/* ./src/js/client.js */
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux" // New

import Layout from "./components/Layout"
import store from "./store" // We need the store

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
app);
// To tie Redux to React, there are two steps
// One of the step is to wrap the top-level component with React-Redux provider
// Another step is to add the "@connect(/* ... */)" part in Layout.js
// Now any component down the chain can import data from the Redux store and can also dispatch store actions