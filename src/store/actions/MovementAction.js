import Constants from "../../constants";
export class MovementAction {
  static async findMovement(payload) {
    return { type: Constants.ACTIONS.FIND_MOVEMENT, payload };
  }
  static async createMovement(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT, payload };
  }
  static async updateMovement(payload) {
    return { type: Constants.ACTIONS.UPDATE_MOVEMENT, payload };
  }
  static async listMovements(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_S, payload };
  }
}
