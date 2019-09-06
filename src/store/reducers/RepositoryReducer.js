import Constants from "../../constants";
console.log("repository reducer location")
export default class RepositoryReducer {
  static actions = [
    Constants.ACTIONS.CREATE_REPOSITORY,
    Constants.ACTIONS.UPDATE_REPOSITORY,
    Constants.ACTIONS.SELECT_REPOSITORY,
    Constants.ACTIONS.LIST_REPOSITORIES
  ];
  static isValidAction(action) {
    return RepositoryReducer.actions.indexOf(action.type) >= 0;
  }
  static createRepository(state, payload) {
    if (!payload || !payload.id)
      return {};
    const entityList = state["repositories"] || [];
    entityList.push(payload);
    return { repositories: entityList };
  }
  static updateRepository(state, payload) {
    const entity = state["repositories"].find(entity => entity.id === payload.id)
    Object.assign(entity || {}, payload)
    return state;
  }
  static selectRepository(state, payload) {
    const [pluralKey, individualKey] = [
      "repositories",
      "repository"
    ];
    if (typeof payload === "string") {
      return {
        [individualKey]:
          (state[pluralKey] || []).find(entity => entity.id === payload) || {}
      };
    } else if (typeof payload === "object" && payload.id) {
      const desiredEntity =
        (state[pluralKey] || []).find(entity => entity.id === payload.id) || {};
      Object.assign(desiredEntity, payload);
      return { [individualKey]: desiredEntity, [pluralKey]: state[pluralKey] };
    }
    return { [individualKey]: {} };
  }
  static listRepositories(state, payload) {
    if (!payload || !payload.length)
      return { repositories: [] };
    return { repositories: payload };
  }
  static dispatch(state, action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_REPOSITORY:
        newState = RepositoryReducer.createRepository(state, action.payload);
        break;
      case Constants.ACTIONS.UPDATE_REPOSITORY:
        newState = RepositoryReducer.updateRepository(state, action.payload);
        break;
      case Constants.ACTIONS.SELECT_REPOSITORY:
        newState = RepositoryReducer.selectRepository(state, action.payload);
        break;
      case Constants.ACTIONS.LIST_REPOSITORIES:
        newState = RepositoryReducer.listRepositories(state, action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}
