import { createStore } from "redux";
import CustomerReducer from "./reducers/CustomerReducer";
import SupplierReducer from "./reducers/SupplierReducer";
import RepositoryReducer from "./reducers/RepositoryReducer";
import ProductReducer from "./reducers/ProductReducer";
import ProductRepositoryReducer from "./reducers/ProductRepositoryReducer";
import MovementReducer from "./reducers/MovementReducer";
import MovementTypeReducer from "./reducers/MovementTypeReducer";
import MovementDetailReducer from "./reducers/MovementDetailReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import RootReducer from "./reducers/RootReducer";
console.log("store location")
const initialState = {
  sessionId: "",
  title: "Tablero",
  customer: {},
  customers: [],
  supplier: {},
  suppliers: [],
  repository: {},
  repositories: [],
  product: {},
  products: [],
  productRepository: {},
  productRepositories: [],
  movement: {},
  movements: [],
  movementType: {},
  movementTypes: [],
  movementDetail: {},
  movementDetails: [],
  category: {},
  categories: []
};
let state = initialState;
class StoreUtils {
  static getCurrentStateCopy() {
    return JSON.parse(JSON.stringify(state));
  }
}
const Store = createStore((state = StoreUtils.getCurrentStateCopy(), action) => {
  let partialState = {};
  if (CustomerReducer.isValidAction(action)) {
    partialState = CustomerReducer.dispatch(state, action) || {};
  } else if (SupplierReducer.isValidAction(action)) {
    partialState = SupplierReducer.dispatch(state, action) || {};
  } else if (RepositoryReducer.isValidAction(action)) {
    partialState = RepositoryReducer.dispatch(state, action) || {};
  } else if (ProductReducer.isValidAction(action)) {
    partialState = ProductReducer.dispatch(state, action) || {};
  } else if (ProductRepositoryReducer.isValidAction(action)) {
    partialState = ProductRepositoryReducer.dispatch(state, action) || {};
  } else if (MovementReducer.isValidAction(action)) {
    partialState = MovementReducer.dispatch(state, action) || {};
  } else if (MovementTypeReducer.isValidAction(action)) {
    partialState = MovementTypeReducer.dispatch(state, action) || {};
  } else if (MovementDetailReducer.isValidAction(action)) {
    partialState = MovementDetailReducer.dispatch(state, action) || {};
  } else if (CategoryReducer.isValidAction(action)) {
    partialState = CategoryReducer.dispatch(state, action) || {};
  } else if (RootReducer.isValidAction(action)) {
    partialState = RootReducer.dispatch(state, action) || {};
  }
  state = Object.assign({}, state, partialState);
  return state;
});
export default Store;
