import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";
const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, [fetchPostsAndUsers]);

  if (!posts) {
    return null;
  }
  const renderedPosts = posts.map(({ id, title, body, userId }) => {
    return (
      <div className="item" key={id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <UserHeader userId={userId} />
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedPosts}</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
