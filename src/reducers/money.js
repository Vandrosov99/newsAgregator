const initState = {
  money: [],
};

const moneyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      const updMoney = [...state.money, action.payload];
      return updMoney;
    default:
      return state;
  }
};

export default moneyReducer;
