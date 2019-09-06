import Constants from "../../constants";
console.log("product actions location")
export default class ProductAction {
  static createProduct(payload) {
    return { type: Constants.ACTIONS.CREATE_PRODUCT, payload };
  }
  static updateProduct(payload) {
    return { type: Constants.ACTIONS.UPDATE_PRODUCT, payload };
  }
  static selectProduct(payload) {
    return { type: Constants.ACTIONS.SELECT_PRODUCT, payload };
  }
  static listProducts(payload) {
    return { type: Constants.ACTIONS.LIST_PRODUCTS, payload };
  }
}
