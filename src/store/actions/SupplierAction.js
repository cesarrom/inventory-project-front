import Constants from "../../constants";
export class SupplierAction {
  static async findSupplier(payload) {
    return { type: Constants.ACTIONS.FIND_SUPPLIER, payload };
  }
  static async createSupplier(payload) {
    return { type: Constants.ACTIONS.CREATE_SUPPLIER, payload };
  }
  static async updateSupplier(payload) {
    return { type: Constants.ACTIONS.UPDATE_SUPPLIER, payload };
  }
  static async listSuppliers(payload) {
    return { type: Constants.ACTIONS.LIST_SUPPLIER_S, payload };
  }
}
