import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    const getAllPosts = async () => {
      return fetchPosts();
    };

    getAllPosts();
  }, [fetchPosts]);

  console.log(posts);

  if (!posts) {
    return <div>No posts</div>;
  }
  const renderedPosts = posts.map(({ id, title, body }) => {
    return (
      <div className="item" key={id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedPosts}</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
