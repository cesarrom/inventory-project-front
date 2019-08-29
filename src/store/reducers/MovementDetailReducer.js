import Constants from "../../constants";
import InventoryClient from "../../api";
export default class MovementDetailReducer {
  static actions = [Constants.ACTIONS.FIND_MOVEMENT_DETAIL, Constants.ACTIONS.CREATE_MOVEMENT_DETAIL, Constants.ACTIONS.UPDATE_MOVEMENT_DETAIL, Constants.ACTIONS.LIST_MOVEMENT_DETAIL_S];
  static isValidAction(action) {
    return MovementDetailReducer.actions.indexOf(action.type) >= 0;
  }
  static async getResponse(res) {
    if (res.error) {
      throw res.error;
    }
    else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }
  static async findMovementDetail(payload) {
    return { movementDetail: await InventoryClient.movementDetail.findMovementDetail(payload).then(MovementDetailReducer.getResponse) };
  }
  static async createMovementDetail(payload) {
    return { movementDetail: await InventoryClient.movementDetail.createMovementDetail(payload).then(MovementDetailReducer.getResponse) };
  }
  static async updateMovementDetail(payload) {
    return { movementDetail: await InventoryClient.movementDetail.updateMovementDetail(payload.id, payload.movementDetail).then(MovementDetailReducer.getResponse) };
  }
  static async listMovementDetails(payload) {
    return { movementDetails: await InventoryClient.movementDetail.listMovementDetails(payload).then(MovementDetailReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_MOVEMENT_DETAIL:
        newState = await MovementDetailReducer.findMovementDetail(action.payload);
        break;
      case Constants.ACTIONS.CREATE_MOVEMENT_DETAIL:
        newState = await MovementDetailReducer.createMovementDetail(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_MOVEMENT_DETAIL:
        newState = await MovementDetailReducer.updateMovementDetail(action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT_DETAIL:
        newState = await MovementDetailReducer.listMovementDetails(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
