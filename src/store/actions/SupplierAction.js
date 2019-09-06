import Constants from "../../constants";
console.log("supplier actions location")
export default class SupplierAction {
  static createSupplier(payload) {
    return { type: Constants.ACTIONS.CREATE_SUPPLIER, payload };
  }
  static updateSupplier(payload) {
    return { type: Constants.ACTIONS.UPDATE_SUPPLIER, payload };
  }
  static selectSupplier(payload) {
    return { type: Constants.ACTIONS.SELECT_SUPPLIER, payload };
  }
  static listSuppliers(payload) {
    return { type: Constants.ACTIONS.LIST_SUPPLIERS, payload };
  }
}
