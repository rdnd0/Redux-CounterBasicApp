import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Counter from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
