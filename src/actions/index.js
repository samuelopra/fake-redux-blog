// Action creator
import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   //Bad approach

//   const response = jsonPlaceholder.get("/posts");
//   console.log("maade call");

//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

// Redux thunk syntax -- not sure how to test this yet
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
