import Constants from "../../constants";
import InventoryClient from "../../api";
export default class SupplierReducer {
  static actions = [Constants.ACTIONS.FIND_SUPPLIER, Constants.ACTIONS.CREATE_SUPPLIER, Constants.ACTIONS.UPDATE_SUPPLIER, Constants.ACTIONS.LIST_SUPPLIER_S];
  static isValidAction(action) {
    return SupplierReducer.actions.indexOf(action.type) >= 0;
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
  static async findSupplier(payload) {
    return { supplier: await InventoryClient.supplier.findSupplier(payload).then(SupplierReducer.getResponse) };
  }
  static async createSupplier(payload) {
    return { supplier: await InventoryClient.supplier.createSupplier(payload).then(SupplierReducer.getResponse) };
  }
  static async updateSupplier(payload) {
    return { supplier: await InventoryClient.supplier.updateSupplier(payload.id, payload.supplier).then(SupplierReducer.getResponse) };
  }
  static async listSuppliers(payload) {
    return { suppliers: await InventoryClient.supplier.listSuppliers(payload).then(SupplierReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_SUPPLIER:
        newState = await SupplierReducer.findSupplier(action.payload);
        break;
      case Constants.ACTIONS.CREATE_SUPPLIER:
        newState = await SupplierReducer.createSupplier(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_SUPPLIER:
        newState = await SupplierReducer.updateSupplier(action.payload);
        break;
      case Constants.ACTIONS.LIST_SUPPLIER:
        newState = await SupplierReducer.listSuppliers(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
