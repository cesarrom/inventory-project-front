import Constants from "../../constants";
console.log("category actions location")
export default class CategoryAction {
  static createCategory(payload) {
    return { type: Constants.ACTIONS.CREATE_CATEGORY, payload };
  }
  static updateCategory(payload) {
    return { type: Constants.ACTIONS.UPDATE_CATEGORY, payload };
  }
  static selectCategory(payload) {
    return { type: Constants.ACTIONS.SELECT_CATEGORY, payload };
  }
  static listCategories(payload) {
    return { type: Constants.ACTIONS.LIST_CATEGORIES, payload };
  }
}
