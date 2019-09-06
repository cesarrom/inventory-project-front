import Constants from "../../constants";
console.log("root actions location")
export default class RootAction {
  static setSessionId(payload) {
    return { type: Constants.ACTIONS.SET_SESSION_ID, payload };
  }
  static setTitle(payload) {
    return { type: Constants.ACTIONS.SET_TITLE, payload };
  }
}
