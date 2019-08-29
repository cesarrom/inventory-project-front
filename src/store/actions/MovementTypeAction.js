import Constants from "../../constants";
export class MovementTypeAction {
  static async findMovementType(payload) {
    return { type: Constants.ACTIONS.FIND_MOVEMENT_TYPE, payload };
  }
  static async createMovementType(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT_TYPE, payload };
  }
  static async updateMovementType(payload) {
    return { type: Constants.ACTIONS.UPDATE_MOVEMENT_TYPE, payload };
  }
  static async listMovementTypes(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_TYPE_S, payload };
  }
}
