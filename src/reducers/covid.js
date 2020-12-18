const initState = {
  covidInfo: [],
};

const covidReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_COV":
      return { ...state, covidInfo: action.payload };
    default:
      return state;
  }
};

export default covidReducer;
