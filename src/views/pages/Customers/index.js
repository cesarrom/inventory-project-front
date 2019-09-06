import React from "react";
import "./styles.css";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import AppStore from "../../../store";
import StompClientFactory from "../../../socket";
import Customer from "../Customer";
import * as LVContainer from "../../containers/ListView";
import Constants from "../../../constants";
console.log("Customers Location!");
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
const CustomerClient = StompClientFactory(Constants.MODEL_NAMES.CUSTOMER);
export default class Customers extends React.Component {
  static OPERATIONS = {
    CREATE_NEW_CUSTOMER: 0,
    TOGGLE_DETAILS: 1,
    SELECT_CUSTOMER_BY_INDEX: 2,
    SELECT_CUSTOMER_BY_ID: 3
  };
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Clientes"));
    this.state = {
      customers: AppStore.Store.getState()["customers"] || [],
      customer: AppStore.Store.getState()["customer"] || {},
      products: AppStore.Store.getState()["products"] || [],
      movements: AppStore.Store.getState()["movements"] || [],
      showCreate: false,
      query: {}
    };
    AppStore.Store.subscribe(() => {
      const crrState = AppStore.Store.getState();
      this.setState({
        customers: crrState.customers,
        customer: crrState.customer,
        product: crrState.products,
        movements: crrState.movements
      });
    });
  }
  dispatch(OPERATION, params) {
    const isOpen = this.state.showCreate;
    let willBeOpen = isOpen;
    const currentCustomer = this.state.customer;
    let nextCustomer = currentCustomer;
    switch (OPERATION) {
      case Customers.OPERATIONS.CREATE_NEW_CUSTOMER:
        willBeOpen = true;
        break;
      case Customers.OPERATIONS.SELECT_CUSTOMER_BY_INDEX:
        willBeOpen = true;
        nextCustomer =
          this.state.customers[params] || {};
        if (nextCustomer.id === currentCustomer.id) {
          nextCustomer = {};
          willBeOpen = false;
        }
        break;
      case Customers.OPERATIONS.SELECT_CUSTOMER_BY_ID:
        nextCustomer = { id: Number(params) };
        if (nextCustomer.id === currentCustomer.id) {
          nextCustomer = {};
          willBeOpen = false;
        }
        break;
      case Customers.OPERATIONS.TOGGLE_DETAILS:
        nextCustomer = {};
        willBeOpen = !isOpen;
        break;
      default:
        break;
    }
    this.setState({ showCreate: willBeOpen });
    if(nextCustomer.id !== undefined)
      CustomerClient.select(nextCustomer.id);
    else
      AppStore.Store.dispatch(AppStore.Actions.CustomerAction.selectCustomer(nextCustomer));
  }
  list() {
    CustomerClient.list(this.state.query);
  }
  render() {
    return (
      <LVContainer.ListView
        showCreate={this.state.showCreate}
        onClickCreate={() => this.dispatch(Customers.OPERATIONS.TOGGLE_DETAILS)}
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
                {this.state.customers.map((profile, index) => (
                  <EV.Table.Row
                    key={profile.id}
                    isSelectable
                    onSelect={() =>
                      this.dispatch(
                        Customers.OPERATIONS.SELECT_CUSTOMER_BY_INDEX,
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
            <Customer customerParams={this.state.customer || {}}></Customer>
          </LVContainer.ListViewBodyDetail>
        </LVContainer.ListViewBody>
      </LVContainer.ListView>
    );
  }
}
