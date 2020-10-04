import React from "react";
import ReactDOM from "react-dom";

// Original version: “import Layout from "./components/Layout";”
class Layout extends React.Component {
  render() {
    return (
    	// Hello
      <h1>It works!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
