import Constants from "../../constants";
export class MovementDetailAction {
  static async findMovementDetail(payload) {
    return { type: Constants.ACTIONS.FIND_MOVEMENT_DETAIL, payload };
  }
  static async createMovementDetail(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT_DETAIL, payload };
  }
  static async updateMovementDetail(payload) {
    return { type: Constants.ACTIONS.UPDATE_MOVEMENT_DETAIL, payload };
  }
  static async listMovementDetails(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_DETAIL_S, payload };
  }
}
