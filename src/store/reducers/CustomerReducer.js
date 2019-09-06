import Constants from "../../constants";
console.log("customer reducer location")
export default class CustomerReducer {
  static actions = [
    Constants.ACTIONS.CREATE_CUSTOMER,
    Constants.ACTIONS.UPDATE_CUSTOMER,
    Constants.ACTIONS.SELECT_CUSTOMER,
    Constants.ACTIONS.LIST_CUSTOMERS
  ];
  static isValidAction(action) {
    return CustomerReducer.actions.indexOf(action.type) >= 0;
  }
  static createCustomer(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["customers"] || [];
    entityList.push(payload);
    return { customers: entityList };
  }
  static updateCustomer(state, payload) {
    const entity = state["customers"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectCustomer(state, payload) {
    const [pluralKey, individualKey] = ["customers","customer"]
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
  static listCustomers(state, payload) {
    if (!payload || !payload.length)
      return { customers: [] };
    return { customers: payload };
  }
  static dispatch(state, action) {
    console.error("Customer Reducer Location!")
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_CUSTOMER:
        newState = CustomerReducer.createCustomer(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_CUSTOMER:
        newState = CustomerReducer.updateCustomer(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_CUSTOMER:
        newState = CustomerReducer.selectCustomer(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_CUSTOMERS:
        newState = CustomerReducer.listCustomers(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
