import Constants from "../../constants";
import InventoryClient from "../../api";
export default class ProductRepositoryReducer {
  static actions = [Constants.ACTIONS.FIND_PRODUCT_REPOSITORY, Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY, Constants.ACTIONS.UPDATE_PRODUCT_REPOSITORY, Constants.ACTIONS.LIST_PRODUCT_REPOSITORIES];
  static isValidAction(action) {
    return ProductRepositoryReducer.actions.indexOf(action.type) >= 0;
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
  static async findProductRepository(payload) {
    return { productRepository: await InventoryClient.productRepository.findProductRepository(payload).then(ProductRepositoryReducer.getResponse) };
  }
  static async createProductRepository(payload) {
    return { productRepository: await InventoryClient.productRepository.createProductRepository(payload).then(ProductRepositoryReducer.getResponse) };
  }
  static async updateProductRepository(payload) {
    return { productRepository: await InventoryClient.productRepository.updateProductRepository(payload.id, payload.productRepository).then(ProductRepositoryReducer.getResponse) };
  }
  static async listProductRepositories(payload) {
    return { productRepositories: await InventoryClient.productRepository.listProductRepositories(payload).then(ProductRepositoryReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_PRODUCT_REPOSITORY:
        newState = await ProductRepositoryReducer.findProductRepository(action.payload);
        break;
      case Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY:
        newState = await ProductRepositoryReducer.createProductRepository(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_PRODUCT_REPOSITORY:
        newState = await ProductRepositoryReducer.updateProductRepository(action.payload);
        break;
      case Constants.ACTIONS.LIST_PRODUCT_REPOSITORY:
        newState = await ProductRepositoryReducer.listProductRepositories(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
