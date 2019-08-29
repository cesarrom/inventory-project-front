import Constants from "../../constants";
import InventoryClient from "../../api";
export default class CategoryReducer {
  static actions = [Constants.ACTIONS.FIND_CATEGORY, Constants.ACTIONS.CREATE_CATEGORY, Constants.ACTIONS.UPDATE_CATEGORY, Constants.ACTIONS.LIST_CATEGORIES];
  static isValidAction(action) {
    return CategoryReducer.actions.indexOf(action.type) >= 0;
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
  static async findCategory(payload) {
    return { category: await InventoryClient.category.findCategory(payload).then(CategoryReducer.getResponse) };
  }
  static async createCategory(payload) {
    return { category: await InventoryClient.category.createCategory(payload).then(CategoryReducer.getResponse) };
  }
  static async updateCategory(payload) {
    return { category: await InventoryClient.category.updateCategory(payload.id, payload.category).then(CategoryReducer.getResponse) };
  }
  static async listCategories(payload) {
    return { categories: await InventoryClient.category.listCategories(payload).then(CategoryReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_CATEGORY:
        newState = await CategoryReducer.findCategory(action.payload);
        break;
      case Constants.ACTIONS.CREATE_CATEGORY:
        newState = await CategoryReducer.createCategory(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_CATEGORY:
        newState = await CategoryReducer.updateCategory(action.payload);
        break;
      case Constants.ACTIONS.LIST_CATEGORY:
        newState = await CategoryReducer.listCategories(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
