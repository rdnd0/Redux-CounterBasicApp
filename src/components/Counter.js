import React from "react";
import Footer from "./Footer";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="counter">
        <h4>Counter</h4>
        <div>
          <button onClick={this.increment}>+</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.decrement} disabled={this.props.count === 0}>
            &ndash;
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
