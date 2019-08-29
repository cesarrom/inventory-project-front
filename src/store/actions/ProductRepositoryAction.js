import Constants from "../../constants";
export class ProductRepositoryAction {
  static async findProductRepository(payload) {
    return { type: Constants.ACTIONS.FIND_PRODUCT_REPOSITORY, payload };
  }
  static async createProductRepository(payload) {
    return { type: Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY, payload };
  }
  static async updateProductRepository(payload) {
    return { type: Constants.ACTIONS.UPDATE_PRODUCT_REPOSITORY, payload };
  }
  static async listProductRepositories(payload) {
    return { type: Constants.ACTIONS.LIST_PRODUCT_REPOSITORIES, payload };
  }
}
