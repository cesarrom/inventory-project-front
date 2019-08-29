import Constants from "../../constants";
import InventoryClient from "../../api";
export default class MovementReducer {
  static actions = [Constants.ACTIONS.FIND_MOVEMENT, Constants.ACTIONS.CREATE_MOVEMENT, Constants.ACTIONS.UPDATE_MOVEMENT, Constants.ACTIONS.LIST_MOVEMENT_S];
  static isValidAction(action) {
    return MovementReducer.actions.indexOf(action.type) >= 0;
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
  static async findMovement(payload) {
    return { movement: await InventoryClient.movement.findMovement(payload).then(MovementReducer.getResponse) };
  }
  static async createMovement(payload) {
    return { movement: await InventoryClient.movement.createMovement(payload).then(MovementReducer.getResponse) };
  }
  static async updateMovement(payload) {
    return { movement: await InventoryClient.movement.updateMovement(payload.id, payload.movement).then(MovementReducer.getResponse) };
  }
  static async listMovements(payload) {
    return { movements: await InventoryClient.movement.listMovements(payload).then(MovementReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_MOVEMENT:
        newState = await MovementReducer.findMovement(action.payload);
        break;
      case Constants.ACTIONS.CREATE_MOVEMENT:
        newState = await MovementReducer.createMovement(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_MOVEMENT:
        newState = await MovementReducer.updateMovement(action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT:
        newState = await MovementReducer.listMovements(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
