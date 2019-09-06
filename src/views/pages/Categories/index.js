import React from "react";
import "./styles.css";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import AppStore from "../../../store";
import StompClientFactory from "../../../socket";
import Category from "../Category";
import * as LVContainer from "../../containers/ListView";
import Constants from "../../../constants";
console.log("Categories Location!");
const tableConfig = [
  {
    label: "ID",
    field: "id"
  },
  {
    label: "Codigo",
    field: "code"
  },
  {
    label: "Nombre",
    field: "name"
  },
  {
    label: "Unidad de Medida",
    field: "unitType"
  }
];
const CategoryClient = StompClientFactory(Constants.MODEL_NAMES.CATEGORY);
export default class Categories extends React.Component {
  static OPERATIONS = {
    CREATE_NEW_CATEGORY: 0,
    TOGGLE_DETAILS: 1,
    SELECT_CATEGORY_BY_INDEX: 2,
    SELECT_CATEGORY_BY_ID: 3
  };
  constructor() {
    super();
    
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Categorías de Producto"));
    this.state = {
      categories: AppStore.Store.getState()["categories"] || [],
      category: AppStore.Store.getState()["category"] || {},
      movementDetails: AppStore.Store.getState()["movementDetails"] || [],
      movements: AppStore.Store.getState()["movements"] || [],
      showCreate: false,
      query: {}
    };
    AppStore.Store.subscribe(() => {
      const crrState = AppStore.Store.getState();
      this.setState({
        categories: crrState.categories,
        category: crrState.category,
        movementDetails: crrState.movementDetails,
        movements: crrState.movements
      });
    });
  }
  dispatch(OPERATION, params) {
    const isOpen = this.state.showCreate;
    let willBeOpen = isOpen;
    const currentCategory = this.state.category;
    let nextCategory = currentCategory;
    switch (OPERATION) {
      case Categories.OPERATIONS.CREATE_NEW_CATEGORY:
        willBeOpen = true;
        break;
      case Categories.OPERATIONS.SELECT_CATEGORY_BY_INDEX:
        willBeOpen = true;
        nextCategory =
          this.state.categories[params] || {};
        if (nextCategory.id === currentCategory.id) {
          nextCategory = {};
          willBeOpen = false;
        }
        break;
      case Categories.OPERATIONS.SELECT_CATEGORY_BY_ID:
        nextCategory = { id: Number(params) };
        if (nextCategory.id === currentCategory.id) {
          nextCategory = {};
          willBeOpen = false;
        }
        break;
      case Categories.OPERATIONS.TOGGLE_DETAILS:
        nextCategory = {};
        willBeOpen = !isOpen;
        break;
      default:
        break;
    }
    this.setState({ showCreate: willBeOpen });
    if(nextCategory.id !== undefined)
      CategoryClient.select(nextCategory.id);
    else
      AppStore.Store.dispatch(AppStore.Actions.CategoryAction.selectCategory(nextCategory));
  }
  list() {
    CategoryClient.list(this.state.query);
  }
  render() {
    return (
      <LVContainer.ListView
        showCreate={this.state.showCreate}
        onClickCreate={() => this.dispatch(Categories.OPERATIONS.TOGGLE_DETAILS)}
      >
        <LVContainer.ListViewBody>
          <LVContainer.ListViewBodyContent>
            <Category></Category>
          </LVContainer.ListViewBodyContent>
        </LVContainer.ListViewBody>
      </LVContainer.ListView>
    );
  }
}
