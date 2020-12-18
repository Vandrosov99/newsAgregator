const initState = {
  money: [],
};

const moneyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { ...state, money: action.payload };
    default:
      return state;
  }
};

export default moneyReducer;
