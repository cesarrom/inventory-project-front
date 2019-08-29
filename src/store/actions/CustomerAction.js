import Constants from "../../constants";
export class CustomerAction {
  static async findCustomer(payload) {
    return { type: Constants.ACTIONS.FIND_CUSTOMER, payload };
  }
  static async createCustomer(payload) {
    return { type: Constants.ACTIONS.CREATE_CUSTOMER, payload };
  }
  static async updateCustomer(payload) {
    return { type: Constants.ACTIONS.UPDATE_CUSTOMER, payload };
  }
  static async listCustomers(payload) {
    return { type: Constants.ACTIONS.LIST_CUSTOMER_S, payload };
  }
}
