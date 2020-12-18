const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
