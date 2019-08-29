import Constants from "../../constants";
import InventoryClient from "../../api";
export default class ProductReducer {
  static actions = [Constants.ACTIONS.FIND_PRODUCT, Constants.ACTIONS.CREATE_PRODUCT, Constants.ACTIONS.UPDATE_PRODUCT, Constants.ACTIONS.LIST_PRODUCT_S];
  static isValidAction(action) {
    return ProductReducer.actions.indexOf(action.type) >= 0;
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
  static async findProduct(payload) {
    return { product: await InventoryClient.product.findProduct(payload).then(ProductReducer.getResponse) };
  }
  static async createProduct(payload) {
    return { product: await InventoryClient.product.createProduct(payload).then(ProductReducer.getResponse) };
  }
  static async updateProduct(payload) {
    return { product: await InventoryClient.product.updateProduct(payload.id, payload.product).then(ProductReducer.getResponse) };
  }
  static async listProducts(payload) {
    return { products: await InventoryClient.product.listProducts(payload).then(ProductReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_PRODUCT:
        newState = await ProductReducer.findProduct(action.payload);
        break;
      case Constants.ACTIONS.CREATE_PRODUCT:
        newState = await ProductReducer.createProduct(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_PRODUCT:
        newState = await ProductReducer.updateProduct(action.payload);
        break;
      case Constants.ACTIONS.LIST_PRODUCT:
        newState = await ProductReducer.listProducts(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
