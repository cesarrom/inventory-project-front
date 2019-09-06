import React from "react";
import "./styles.css";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import AppStore from "../../../store";
import StompClientFactory from "../../../socket";
import Supplier from "../Supplier";
import * as LVContainer from "../../containers/ListView";
import Constants from "../../../constants";
console.log("Suppliers Location!");
const tableConfig = [
  {
    label: "ID",
    field: "id"
  },
  {
    label: "DNI",
    field: "identification"
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
    label: "Email",
    field: "email"
  }
];
const SupplierClient = StompClientFactory(Constants.MODEL_NAMES.SUPPLIER);
export default class Suppliers extends React.Component {
  static OPERATIONS = {
    CREATE_NEW_SUPPLIER: 0,
    TOGGLE_DETAILS: 1,
    SELECT_SUPPLIER_BY_INDEX: 2,
    SELECT_SUPPLIER_BY_ID: 3
  };
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Proveedores"));
    this.state = {
      suppliers: AppStore.Store.getState()["suppliers"] || [],
      supplier: AppStore.Store.getState()["supplier"] || {},
      products: AppStore.Store.getState()["products"] || [],
      movements: AppStore.Store.getState()["movements"] || [],
      showCreate: false,
      query: {}
    };
    AppStore.Store.subscribe(() => {
      const crrState = AppStore.Store.getState();
      this.setState({
        suppliers: crrState.suppliers,
        supplier: crrState.supplier,
        product: crrState.products,
        movements: crrState.movements
      });
    });
  }
  dispatch(OPERATION, params) {
    const isOpen = this.state.showCreate;
    let willBeOpen = isOpen;
    const currentSupplier = this.state.supplier;
    let nextSupplier = currentSupplier;
    switch (OPERATION) {
      case Suppliers.OPERATIONS.CREATE_NEW_SUPPLIER:
        willBeOpen = true;
        break;
      case Suppliers.OPERATIONS.SELECT_SUPPLIER_BY_INDEX:
        willBeOpen = true;
        nextSupplier =
          this.state.suppliers[params] || {};
        if (nextSupplier.id === currentSupplier.id) {
          nextSupplier = {};
          willBeOpen = false;
        }
        break;
      case Suppliers.OPERATIONS.SELECT_SUPPLIER_BY_ID:
        nextSupplier = { id: Number(params) };
        if (nextSupplier.id === currentSupplier.id) {
          nextSupplier = {};
          willBeOpen = false;
        }
        break;
      case Suppliers.OPERATIONS.TOGGLE_DETAILS:
        nextSupplier = {};
        willBeOpen = !isOpen;
        break;
      default:
        break;
    }
    this.setState({ showCreate: willBeOpen });
    if(nextSupplier.id !== undefined)
      SupplierClient.select(nextSupplier.id);
    else
      AppStore.Store.dispatch(AppStore.Actions.SupplierAction.selectSupplier(nextSupplier));
  }
  list() {
    SupplierClient.list(this.state.query);
  }
  render() {
    return (
      <LVContainer.ListView
        showCreate={this.state.showCreate}
        onClickCreate={() => this.dispatch(Suppliers.OPERATIONS.TOGGLE_DETAILS)}
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
                  items={this.state.products}
                  onChange={selected => console.log(selected)}
                  placeholder="Producto"
                  onChange={selected =>
                    this.setState({
                      query: Object.assign(this.state.query || {}, {
                        product: selected.id
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
                {this.state.suppliers.map((profile, index) => (
                  <EV.Table.Row
                    key={profile.id}
                    isSelectable
                    onSelect={() =>
                      this.dispatch(
                        Suppliers.OPERATIONS.SELECT_SUPPLIER_BY_INDEX,
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
            <Supplier supplierParams={this.state.supplier || {}}></Supplier>
          </LVContainer.ListViewBodyDetail>
        </LVContainer.ListViewBody>
      </LVContainer.ListView>
    );
  }
}
