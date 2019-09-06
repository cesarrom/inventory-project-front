import Constants from "../../constants";
console.log("root reducer location")
export default class RootReducer {
  static actions = [Constants.ACTIONS.SET_SESSION_ID, Constants.ACTIONS.SET_TITLE];
  static isValidAction(action) {
    return RootReducer.actions.indexOf(action.type) >= 0;
  }
  static setSessionId(payload) {
    return { sessionId: payload };
  }
  static setTitle(payload) {
    return { title: payload };
  }
  static dispatch(state, action) {
    console.error("Root Reducer Location!")
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.SET_SESSION_ID:
        newState = RootReducer.setSessionId(action.payload);
        break;
      case Constants.ACTIONS.SET_TITLE:
        newState = RootReducer.setTitle(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
