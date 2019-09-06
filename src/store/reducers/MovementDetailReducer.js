import Constants from "../../constants";
console.log("movement detail reducer location")
export default class MovementDetailReducer {
  static actions = [
    Constants.ACTIONS.CREATE_MOVEMENT_DETAIL,
    Constants.ACTIONS.UPDATE_MOVEMENT_DETAIL,
    Constants.ACTIONS.SELECT_MOVEMENT_DETAIL,
    Constants.ACTIONS.LIST_MOVEMENT_DETAILS
  ];
  static isValidAction(action) {
    return MovementDetailReducer.actions.indexOf(action.type) >= 0;
  }
  static createMovementDetail(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["movementDetails"] || [];
    entityList.push(payload);
    return { movementDetails: entityList };
  }
  static updateMovementDetail(state, payload) {
    const entity = state["movementDetails"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectMovementDetail(state, payload) {
    const [pluralKey, individualKey] = ["movementDetails","movementDetail"]
    if (typeof payload === "string") {
      return {
        [individualKey]:
          (state[pluralKey] || []).find(entity => entity.id === payload) ||
          {}
      };
    } else if (typeof payload === "object" && payload.id) {
      const desiredEntity =
        (state[pluralKey] || []).find(entity => entity.id === payload.id) ||
        {};
      Object.assign(desiredEntity, payload);
      return { [individualKey]: desiredEntity, [pluralKey]: state[pluralKey] };
    }
    return { [individualKey]: {} };
  }
  static listMovementDetails(state, payload) {
    if (!payload || !payload.length)
      return { movementDetails: [] };
    return { movementDetails: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_MOVEMENT_DETAIL:
        newState = MovementDetailReducer.createMovementDetail(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_MOVEMENT_DETAIL:
        newState = MovementDetailReducer.updateMovementDetail(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_MOVEMENT_DETAIL:
        newState = MovementDetailReducer.selectMovementDetail(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT_DETAILS:
        newState = MovementDetailReducer.listMovementDetails(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
