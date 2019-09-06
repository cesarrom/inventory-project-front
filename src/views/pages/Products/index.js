import React from "react";
import "./styles.css";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import AppStore from "../../../store";
import StompClientFactory from "../../../socket";
import Product from "../Product";
import * as LVContainer from "../../containers/ListView";
import Constants from "../../../constants";
console.log("Products Location!");
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
const ProductClient = StompClientFactory(Constants.MODEL_NAMES.PRODUCT);
export default class Products extends React.Component {
  static OPERATIONS = {
    CREATE_NEW_PRODUCT: 0,
    TOGGLE_DETAILS: 1,
    SELECT_PRODUCT_BY_INDEX: 2,
    SELECT_PRODUCT_BY_ID: 3
  };
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Productos"));
    this.state = {
      products: AppStore.Store.getState()["products"] || [],
      product: AppStore.Store.getState()["product"] || {},
      movementDetails: AppStore.Store.getState()["movementDetails"] || [],
      movements: AppStore.Store.getState()["movements"] || [],
      showCreate: false,
      query: {}
    };
    AppStore.Store.subscribe(() => {
      const crrState = AppStore.Store.getState();
      this.setState({
        products: crrState.products,
        product: crrState.product,
        movementDetails: crrState.movementDetails,
        movements: crrState.movements
      });
    });
  }
  dispatch(OPERATION, params) {
    const isOpen = this.state.showCreate;
    let willBeOpen = isOpen;
    const currentProduct = this.state.product;
    let nextProduct = currentProduct;
    switch (OPERATION) {
      case Products.OPERATIONS.CREATE_NEW_PRODUCT:
        willBeOpen = true;
        break;
      case Products.OPERATIONS.SELECT_PRODUCT_BY_INDEX:
        willBeOpen = true;
        nextProduct = this.state.products[params] || {};
        if (nextProduct.id === currentProduct.id) {
          nextProduct = {};
          willBeOpen = false;
        }
        break;
      case Products.OPERATIONS.SELECT_PRODUCT_BY_ID:
        nextProduct = { id: Number(params) };
        if (nextProduct.id === currentProduct.id) {
          nextProduct = {};
          willBeOpen = false;
        }
        break;
      case Products.OPERATIONS.TOGGLE_DETAILS:
        nextProduct = {};
        willBeOpen = !isOpen;
        break;
      default:
        break;
    }
    this.setState({ showCreate: willBeOpen });

    AppStore.Store.dispatch(
      AppStore.Actions.ProductAction.selectProduct(nextProduct)
    );
  }
  list() {
    ProductClient.list(this.state.query);
  }
  render() {
    return (
      <LVContainer.ListView
        showCreate={this.state.showCreate}
        onClickCreate={() => this.dispatch(Products.OPERATIONS.TOGGLE_DETAILS)}
      >
        <LVContainer.ListViewHeader onSearch={() => this.list()}>
          <GS.Grid fluid>
            <GS.Row>
              <GS.Col xs={4}>
                <EV.SearchInput
                  width="100%"
                  placeholder="Nombre"
                  value={this.state.query.name || ""}
                  onChange={e =>
                    this.setState({
                      query: Object.assign(this.state.query || {}, {
                        name: e.target.value
                      })
                    })
                  }
                ></EV.SearchInput>
              </GS.Col>
              <GS.Col xs={4}>
                <EV.Combobox
                  width="100%"
                  items={this.state.movementDetails}
                  onChange={selected => console.log(selected)}
                  placeholder="Producto"
                  onChange={selected =>
                    this.setState({
                      query: Object.assign(this.state.query || {}, {
                        movementDetail: selected.id
                      })
                    })
                  }
                  autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: "Productos"
                  }}
                />
              </GS.Col>
              <GS.Col xs={4}>
                <EV.Combobox
                  width="100%"
                  items={this.state.movements}
                  onChange={selected => console.log(selected)}
                  placeholder="Factura"
                  onChange={selected =>
                    this.setState({
                      query: Object.assign(this.state.query || {}, {
                        movement: selected.id
                      })
                    })
                  }
                  autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: "Facturas"
                  }}
                />
              </GS.Col>
            </GS.Row>
          </GS.Grid>
        </LVContainer.ListViewHeader>
        <LVContainer.ListViewBody>
          <LVContainer.ListViewBodyContent>
            <EV.Table>
              <EV.Table.Head>
                {tableConfig.map(rowConfig => (
                  <EV.Table.TextHeaderCell>
                    {rowConfig.label}
                  </EV.Table.TextHeaderCell>
                ))}
              </EV.Table.Head>
              <EV.Table.Body>
                {this.state.products.map((profile, index) => (
                  <EV.Table.Row
                    key={profile.id}
                    isSelectable
                    onSelect={() =>
                      this.dispatch(
                        Products.OPERATIONS.SELECT_PRODUCT_BY_INDEX,
                        index
                      )
                    }
                  >
                    {tableConfig.map(rowConfig => (
                      <EV.Table.TextCell>
                        {profile[rowConfig.field]}
                      </EV.Table.TextCell>
                    ))}
                  </EV.Table.Row>
                ))}
              </EV.Table.Body>
            </EV.Table>
          </LVContainer.ListViewBodyContent>
          <LVContainer.ListViewBodyDetail>
            { AppStore.Store.getState()["product"]!==undefined ? <Product></Product> : null }
          </LVContainer.ListViewBodyDetail>
        </LVContainer.ListViewBody>
      </LVContainer.ListView>
    );
  }
}
