import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Nav from "./components/Nav";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 0
};

// const reducer = (state = initialState, action) => {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
        <Counter />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
