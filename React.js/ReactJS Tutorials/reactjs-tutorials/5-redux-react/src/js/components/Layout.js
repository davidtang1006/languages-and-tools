/* ./src/js/components/Layout.js */
import React from "react"
import { connect } from "react-redux"
import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  // "connect" is going to take two functions
  // The first function is for getting store values in as props
  // The second function is supposed to be the one that maps dispatch to props
  return {
    // The return items will be regarded as props
    // Just pull in the data we want
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets
  }
})
// We transpile with ES6
// Note that in package.json and webpack.config.js, we have "babel-plugin-transform-decorators-legacy", so we can use decorators
// Using decorator is a great way to wrap a component
// Here, connect wraps the Layout component
// This is a simple way to inject props into layout without messing with the Layout component

export default class Layout extends React.Component {
  componentWillMount() {
    // We want to fetch the user
    // Actually, nothing asynchronous happens here
    this.props.dispatch(fetchUser());
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets());
    // We have asynchronous action here
  }

  render() {
    const { user, tweets } = this.props;
    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)
    // Do not forget the curly braces!

    // console.log(this.props);
    // We can see that props contains a user object and a dispatch function so that we can dispatch some actions
    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>Load tweets</button>
    }

    // We would like to show the data fetched
    return (
      <div>
        <h1>Hello, {user.name}.</h1>
        <u1>{mappedTweets}</u1>
      </div>
    );
  }
}
