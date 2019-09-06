import Constants from "../../constants";
console.log("movement type reducer location")
export default class MovementTypeReducer {
  static actions = [
    Constants.ACTIONS.CREATE_MOVEMENT_TYPE,
    Constants.ACTIONS.UPDATE_MOVEMENT_TYPE,
    Constants.ACTIONS.SELECT_MOVEMENT_TYPE,
    Constants.ACTIONS.LIST_MOVEMENT_TYPES
  ];
  static isValidAction(action) {
    return MovementTypeReducer.actions.indexOf(action.type) >= 0;
  }
  static createMovementType(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["movementTypes"] || [];
    entityList.push(payload);
    return { movementTypes: entityList };
  }
  static updateMovementType(state, payload) {
    const entity = state["movementTypes"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectMovementType(state, payload) {
    const [pluralKey, individualKey] = ["movementTypes","movementType"]
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
  static listMovementTypes(state, payload) {
    if (!payload || !payload.length)
      return { movementTypes: [] };
    return { movementTypes: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_MOVEMENT_TYPE:
        newState = MovementTypeReducer.createMovementType(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_MOVEMENT_TYPE:
        newState = MovementTypeReducer.updateMovementType(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_MOVEMENT_TYPE:
        newState = MovementTypeReducer.selectMovementType(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT_TYPES:
        newState = MovementTypeReducer.listMovementTypes(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
