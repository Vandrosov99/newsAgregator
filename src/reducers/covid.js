const initState = {
  covidInfo: [],
};

const covidReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_COV":
      const updCovid = [...state.covidInfo, action.payload];
      return updCovid;
    default:
      return state;
  }
};

export default covidReducer;
