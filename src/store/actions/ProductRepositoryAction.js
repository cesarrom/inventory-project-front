import Constants from "../../constants";
console.log("product repository actions location")
export default class ProductRepositoryAction {
  static createProductRepository(payload) {
    return { type: Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY, payload };
  }
  static updateProductRepository(payload) {
    return { type: Constants.ACTIONS.UPDATE_PRODUCT_REPOSITORY, payload };
  }
  static selectProductRepository(payload) {
    return { type: Constants.ACTIONS.SELECT_PRODUCT_REPOSITORY, payload };
  }
  static listProductRepositories(payload) {
    return { type: Constants.ACTIONS.LIST_PRODUCT_REPOSITORIES, payload };
  }
}
