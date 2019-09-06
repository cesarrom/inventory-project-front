import Constants from "../../constants";
console.log("movement details actions location")
export default class MovementDetailAction {
  static createMovementDetail(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT_DETAIL, payload };
  }
  static updateMovementDetail(payload) {
    return { type: Constants.ACTIONS.UPDATE_MOVEMENT_DETAIL, payload };
  }
  static selectMovementDetail(payload) {
    return { type: Constants.ACTIONS.SELECT_MOVEMENT_DETAIL, payload };
  }
  static listMovementDetails(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_DETAILS, payload };
  }
}
