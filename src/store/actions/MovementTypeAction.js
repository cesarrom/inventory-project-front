import Constants from "../../constants";
console.log("movement type actions location")
export default class MovementTypeAction {
  static createMovementType(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT_TYPE, payload };
  }
  static updateMovementType(payload) {
    return { type: Constants.ACTIONS.UPDATE_MOVEMENT_TYPE, payload };
  }
  static selectMovementType(payload) {
    return { type: Constants.ACTIONS.SELECT_MOVEMENT_TYPE, payload };
  }
  static listMovementTypes(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_TYPES, payload };
  }
}
