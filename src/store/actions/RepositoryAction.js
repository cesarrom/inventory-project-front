import Constants from "../../constants";
export class RepositoryAction {
  static async findRepository(payload) {
    return { type: Constants.ACTIONS.FIND_REPOSITORY, payload };
  }
  static async createRepository(payload) {
    return { type: Constants.ACTIONS.CREATE_REPOSITORY, payload };
  }
  static async updateRepository(payload) {
    return { type: Constants.ACTIONS.UPDATE_REPOSITORY, payload };
  }
  static async listRepositories(payload) {
    return { type: Constants.ACTIONS.LIST_REPOSITORIES, payload };
  }
}
