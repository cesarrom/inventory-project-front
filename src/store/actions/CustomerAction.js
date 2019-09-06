import Constants from "../../constants";
console.log("customer actions location")
export default class CustomerAction {
  static createCustomer(payload) {
    return { type: Constants.ACTIONS.CREATE_CUSTOMER, payload };
  }
  static updateCustomer(payload) {
    return { type: Constants.ACTIONS.UPDATE_CUSTOMER, payload };
  }
  static selectCustomer(payload) {
    return { type: Constants.ACTIONS.SELECT_CUSTOMER, payload };
  }
  static listCustomers(payload) {
    return { type: Constants.ACTIONS.LIST_CUSTOMERS, payload };
  }
}
