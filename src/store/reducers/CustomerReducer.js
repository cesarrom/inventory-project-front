import Constants from "../../constants";
import InventoryClient from "../../api";
export default class CustomerReducer {
  static actions = [Constants.ACTIONS.FIND_CUSTOMER, Constants.ACTIONS.CREATE_CUSTOMER, Constants.ACTIONS.UPDATE_CUSTOMER, Constants.ACTIONS.LIST_CUSTOMER_S];
  static isValidAction(action) {
    return CustomerReducer.actions.indexOf(action.type) >= 0;
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
  static async findCustomer(payload) {
    return { customer: await InventoryClient.customer.findCustomer(payload).then(CustomerReducer.getResponse) };
  }
  static async createCustomer(payload) {
    return { customer: await InventoryClient.customer.createCustomer(payload).then(CustomerReducer.getResponse) };
  }
  static async updateCustomer(payload) {
    return { customer: await InventoryClient.customer.updateCustomer(payload.id, payload.customer).then(CustomerReducer.getResponse) };
  }
  static async listCustomers(payload) {
    return { customers: await InventoryClient.customer.listCustomers(payload).then(CustomerReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_CUSTOMER:
        newState = await CustomerReducer.findCustomer(action.payload);
        break;
      case Constants.ACTIONS.CREATE_CUSTOMER:
        newState = await CustomerReducer.createCustomer(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_CUSTOMER:
        newState = await CustomerReducer.updateCustomer(action.payload);
        break;
      case Constants.ACTIONS.LIST_CUSTOMER:
        newState = await CustomerReducer.listCustomers(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
