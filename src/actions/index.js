const signPost = payload => {
  return {
    type: "ADD_POST",
    payload: payload,
  };
};

const signMoney = payload => {
  return {
    type: "ADD_MONEY",
    payload: payload,
  };
};

const signCOV = payload => {
  return {
    type: "ADD_COV",
    payload: payload,
  };
};

export default {
  signPost,
  signMoney,
  signCOV,
};
