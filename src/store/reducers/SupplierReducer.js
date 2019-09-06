import Constants from "../../constants";
console.log("supplier reducer location")
export default class SupplierReducer {
  static actions = [
    Constants.ACTIONS.CREATE_SUPPLIER,
    Constants.ACTIONS.UPDATE_SUPPLIER,
    Constants.ACTIONS.SELECT_SUPPLIER,
    Constants.ACTIONS.LIST_SUPPLIERS
  ];
  static isValidAction(action) {
    return SupplierReducer.actions.indexOf(action.type) >= 0;
  }
  static createSupplier(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["suppliers"] || [];
    entityList.push(payload);
    return { suppliers: entityList };
  }
  static updateSupplier(state, payload) {
    const entity = state["suppliers"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectSupplier(state, payload) {
    const [pluralKey, individualKey] = [
      "suppliers",
      "supplier"
    ];
    if (typeof payload === "string") {
      return {
        [individualKey]:
          (state[pluralKey] || []).find(entity => entity.id === payload) || {}
      };
    } else if (typeof payload === "object" && payload.id) {
      const desiredEntity =
        (state[pluralKey] || []).find(entity => entity.id === payload.id) || {};
      Object.assign(desiredEntity, payload);
      return { [individualKey]: desiredEntity, [pluralKey]: state[pluralKey] };
    }
    return { [individualKey]: {} };
  }
  static listSuppliers(state, payload) {
    if (!payload || !payload.length)
      return { suppliers: [] };
    return { suppliers: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_SUPPLIER:
        newState = SupplierReducer.createSupplier(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_SUPPLIER:
        newState = SupplierReducer.updateSupplier(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_SUPPLIER:
        newState = SupplierReducer.selectSupplier(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_SUPPLIERS:
        newState = SupplierReducer.listSuppliers(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
