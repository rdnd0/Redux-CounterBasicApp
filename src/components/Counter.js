import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count += 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count -= 1)
    });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <span className="count">{this.state.count}</span>
        <button onClick={this.decrement} disabled={this.state.count === 0}>
          &ndash;
        </button>
      </div>
    );
  }
}

export default Counter;
