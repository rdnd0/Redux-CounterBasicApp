import React from "react";
import { connect } from "react-redux";

const Nav = props => {
  return <div>{props.count}</div>;
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Nav);
