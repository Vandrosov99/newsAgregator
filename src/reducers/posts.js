const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POST":
      const updPosts = [...state.posts, ...action.payload];
      return updPosts;
    default:
      return state;
  }
};

export default postReducer;
