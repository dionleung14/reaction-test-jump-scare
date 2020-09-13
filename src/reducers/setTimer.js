const setTimerReducer = (state = 0, action) => {
  switch (action.type) {
    case "SETTIMER":
      return 3000;
    default:
      return state;
  }
};
export default setTimerReducer;
