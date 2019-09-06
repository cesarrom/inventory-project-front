import Constants from "../../constants";
console.log("product Reducer Location")
export default class ProductReducer {
  static actions = [
    Constants.ACTIONS.CREATE_PRODUCT,
    Constants.ACTIONS.UPDATE_PRODUCT,
    Constants.ACTIONS.SELECT_PRODUCT,
    Constants.ACTIONS.LIST_PRODUCTS
  ];
  static isValidAction(action) {
    return ProductReducer.actions.indexOf(action.type) >= 0;
  }
  static createProduct(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["products"] || [];
    entityList.push(payload);
    return { products: entityList };
  }
  static updateProduct(state, payload) {
    const entity = state["products"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectProduct(state, payload) {
    const [pluralKey, individualKey] = ["products","product"]
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
  static listProducts(state, payload) {
    if (!payload || !payload.length)
      return { products: [] };
    return { products: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_PRODUCT:
        newState = ProductReducer.createProduct(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_PRODUCT:
        newState = ProductReducer.updateProduct(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_PRODUCT:
        newState = ProductReducer.selectProduct(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_PRODUCTS:
        newState = ProductReducer.listProducts(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
