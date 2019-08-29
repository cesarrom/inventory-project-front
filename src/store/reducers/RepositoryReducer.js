import Constants from "../../constants";
import InventoryClient from "../../api";
export default class RepositoryReducer {
  static actions = [Constants.ACTIONS.FIND_REPOSITORY, Constants.ACTIONS.CREATE_REPOSITORY, Constants.ACTIONS.UPDATE_REPOSITORY, Constants.ACTIONS.LIST_REPOSITORIES];
  static isValidAction(action) {
    return RepositoryReducer.actions.indexOf(action.type) >= 0;
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
  static async findRepository(payload) {
    return { repository: await InventoryClient.repository.findRepository(payload).then(RepositoryReducer.getResponse) };
  }
  static async createRepository(payload) {
    return { repository: await InventoryClient.repository.createRepository(payload).then(RepositoryReducer.getResponse) };
  }
  static async updateRepository(payload) {
    return { repository: await InventoryClient.repository.updateRepository(payload.id, payload.repository).then(RepositoryReducer.getResponse) };
  }
  static async listRepositories(payload) {
    return { repositories: await InventoryClient.repository.listRepositories(payload).then(RepositoryReducer.getResponse) };
  }
  static async dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.FIND_REPOSITORY:
        newState = await RepositoryReducer.findRepository(action.payload);
        break;
      case Constants.ACTIONS.CREATE_REPOSITORY:
        newState = await RepositoryReducer.createRepository(action.payload);
        break;
      case Constants.ACTIONS.UPDATE_REPOSITORY:
        newState = await RepositoryReducer.updateRepository(action.payload);
        break;
      case Constants.ACTIONS.LIST_REPOSITORY:
        newState = await RepositoryReducer.listRepositories(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
