import Constants from "../../constants";
console.log("repository actions location")
export default class RepositoryAction {
  static createRepository(payload) {
    return { type: Constants.ACTIONS.CREATE_REPOSITORY, payload };
  }
  static updateRepository(payload) {
    return { type: Constants.ACTIONS.UPDATE_REPOSITORY, payload };
  }
  static selectRepository(payload) {
    return { type: Constants.ACTIONS.SELECT_REPOSITORY, payload };
  }
  static listRepositories(payload) {
    return { type: Constants.ACTIONS.LIST_REPOSITORIES, payload };
  }
}
