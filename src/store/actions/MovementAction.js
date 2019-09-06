import Constants from "../../constants";
console.log("movement actions location")
export default class MovementAction {
  static createMovement(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT, payload };
  }
  static updateMovement(payload) {
    return { type: Constants.ACTIONS.UPDATE_MOVEMENT, payload };
  }
  static selectMovement(payload) {
    return { type: Constants.ACTIONS.SELECT_MOVEMENT, payload };
  }
  static listMovements(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENTS, payload };
  }
}
