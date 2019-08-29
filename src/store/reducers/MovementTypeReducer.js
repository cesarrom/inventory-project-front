import Constants from "../../constants";
import InventoryClient from "../../api";
export default class MovementTypeReducer {
  static actions = [Constants.ACTIONS.FIND_MOVEMENT_TYPE, Constants.ACTIONS.CREATE_MOVEMENT_TYPE, Constants.ACTIONS.UPDATE_MOVEMENT_TYPE, Constants.ACTIONS.LIST_MOVEMENT_TYPE_S];
  static isValidAction(action) {
    return MovementTypeReducer.actions.indexOf(action.type) >= 0;
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
  static async findMovementType(payload) {
    return { movementType: await InventoryClient.movementType.findMovementType(payload).then(MovementTypeReducer.getResponse) };
  }
  static async createMovementType(payload) {
    return { movementType: await InventoryClient.movementType.createMovementType(payload).then(MovementTypeReducer.getResponse) };
  }
  static async updateMovementType(payload) {
    return { movementType: await InventoryClient.movementType.updateMovementType(payload.id, payload.movementType).then(MovementTypeReducer.getResponse) };
  }
  static async listMovementTypes(payload) {
    return { movementTypes: await InventoryClient.movementType.listMovementTypes(payload).then(MovementTypeReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_MOVEMENT_TYPE:
        newState = await MovementTypeReducer.findMovementType(action.payload);
        break;
      case Constants.ACTIONS.CREATE_MOVEMENT_TYPE:
        newState = await MovementTypeReducer.createMovementType(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_MOVEMENT_TYPE:
        newState = await MovementTypeReducer.updateMovementType(action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT_TYPE:
        newState = await MovementTypeReducer.listMovementTypes(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
