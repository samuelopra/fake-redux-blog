import React, { useEffect } from "react";
import { connect } from "react-redux";
const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find((ele) => ele.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
