import Constants from "../../constants";
export class ProductAction {
  static async findProduct(payload) {
    return { type: Constants.ACTIONS.FIND_PRODUCT, payload };
  }
  static async createProduct(payload) {
    return { type: Constants.ACTIONS.CREATE_PRODUCT, payload };
  }
  static async updateProduct(payload) {
    return { type: Constants.ACTIONS.UPDATE_PRODUCT, payload };
  }
  static async listProducts(payload) {
    return { type: Constants.ACTIONS.LIST_PRODUCT_S, payload };
  }
}
