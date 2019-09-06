import Constants from "../../constants";
console.log("product repository reducer location")
export default class ProductRepositoryReducer {
  static actions = [
    Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY,
    Constants.ACTIONS.UPDATE_PRODUCT_REPOSITORY,
    Constants.ACTIONS.SELECT_PRODUCT_REPOSITORY,
    Constants.ACTIONS.LIST_PRODUCT_REPOSITORIES
  ];
  static isValidAction(action) {
    return ProductRepositoryReducer.actions.indexOf(action.type) >= 0;
  }
  static createProductRepository(state, payload) {
    if (!payload || !payload.id) return {};
    const entityList = state["productRepositories"] || [];
    entityList.push(payload);
    return { productRepositories: entityList };
  }
  static updateProductRepository(state, payload) {
    const entity = state["productRepositories"].find(
      entity => entity.id === payload.id
    );
    Object.assign(entity || {}, payload);
    return state;
  }
  static selectProductRepository(state, payload) {
    const [pluralKey, individualKey] = [
      "productRepositories",
      "productRepository"
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
  static listProductRepositories(state, payload) {
    if (!payload || !payload.length) return { productRepositories: [] };
    return { productRepositories: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY:
        newState = ProductRepositoryReducer.createProductRepository(
          state,
          action.payload
        );
        break;
      case Constants.ACTIONS.UPDATE_PRODUCT_REPOSITORY:
        newState = ProductRepositoryReducer.updateProductRepository(
          state,
          action.payload
        );
        break;
      case Constants.ACTIONS.SELECT_PRODUCT_REPOSITORY:
        newState = ProductRepositoryReducer.selectProductRepository(
          state,
          action.payload
        );
        break;
      case Constants.ACTIONS.LIST_PRODUCT_REPOSITORIES:
        newState = ProductRepositoryReducer.listProductRepositories(
          state,
          action.payload
        );
        break;
      default:
        break;
    }
    return newState;
  }
}
