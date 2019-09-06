import Constants from "../../constants";
console.log("category reducer location")
export default class CategoryReducer {
  static actions = [
    Constants.ACTIONS.CREATE_CATEGORY,
    Constants.ACTIONS.UPDATE_CATEGORY,
    Constants.ACTIONS.SELECT_CATEGORY,
    Constants.ACTIONS.LIST_CATEGORIES
  ];
  static isValidAction(action) {
    return CategoryReducer.actions.indexOf(action.type) >= 0;
  }
  static createCategory(state, payload) {
    if (!payload || !payload.id) return {};
    const entityList = state["categories"] || [];
    entityList.push(payload);
    return { categories: entityList };
  }
  static updateCategory(state, payload) {
    const entity = state["categories"].find(entity => entity.id === payload.id);
    Object.assign(entity || {}, payload);
    return state;
  }
  static selectCategory(state, payload) {
    const [pluralKey, individualKey] = ["categories","category"]
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
  static listCategories(state, payload) {
    if (!payload || !payload.length) return { categories : [] };
    return { categories: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_CATEGORY:
        newState = CategoryReducer.createCategory(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_CATEGORY:
        newState = CategoryReducer.updateCategory(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_CATEGORY:
        newState = CategoryReducer.selectCategory(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_CATEGORIES:
        newState = CategoryReducer.listCategories(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
