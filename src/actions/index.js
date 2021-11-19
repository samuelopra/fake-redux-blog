// Action creator
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// export const fetchPosts = () => {
//   //Bad approach

//   const response = jsonPlaceholder.get("/posts");
//   console.log("maade call");

//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //instead of memoizing, just get each unique user id using lodash
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  // refactor using chain method
  const chain = _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

  console.log(chain);
};
// Redux thunk syntax -- not sure how to test this yet
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   return _fetchUser(id, dispatch);
// };

// //Memoized with lodash to prevent multiple API calls. Not ideal if data changes.
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
