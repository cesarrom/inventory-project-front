import Constants from "../../constants";
export class CategoryAction {
  static async findCategory(payload) {
    return { type: Constants.ACTIONS.FIND_CATEGORY, payload };
  }
  static async createCategory(payload) {
    return { type: Constants.ACTIONS.CREATE_CATEGORY, payload };
  }
  static async updateCategory(payload) {
    return { type: Constants.ACTIONS.UPDATE_CATEGORY, payload };
  }
  static async listCategories(payload) {
    return { type: Constants.ACTIONS.LIST_CATEGORIES, payload };
  }
}
