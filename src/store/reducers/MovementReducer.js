import Constants from "../../constants";
console.log("movement reducer location")
export default class MovementReducer {
  static actions = [
    Constants.ACTIONS.CREATE_MOVEMENT,
    Constants.ACTIONS.UPDATE_MOVEMENT,
    Constants.ACTIONS.SELECT_MOVEMENT,
    Constants.ACTIONS.LIST_MOVEMENTS
  ];
  static isValidAction(action) {
    return MovementReducer.actions.indexOf(action.type) >= 0;
  }
  static createMovement(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["movements"] || [];
    entityList.push(payload);
    return { movements: entityList };
  }
  static updateMovement(state, payload) {
    const entity = state["movements"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectMovement(state, payload) {
    const [pluralKey, individualKey] = ["movements","movement"]
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
  static listMovements(state, payload) {
    if (!payload || !payload.length)
      return { movements: [] };
    return { movements: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_MOVEMENT:
        newState = MovementReducer.createMovement(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_MOVEMENT:
        newState = MovementReducer.updateMovement(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_MOVEMENT:
        newState = MovementReducer.selectMovement(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENTS:
        newState = MovementReducer.listMovements(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
