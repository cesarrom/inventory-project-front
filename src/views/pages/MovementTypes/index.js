import React from "react";
import "./styles.css";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import AppStore from "../../../store";
import StompClientFactory from "../../../socket";
import MovementType from "../MovementType";
import * as LVContainer from "../../containers/ListView";
import Constants from "../../../constants";
console.log("MovementTypes Location!");
const tableConfig = [
  {
    label: "ID",
    field: "id"
  },
  {
    label: "Nombre",
    field: "name"
  },
];
const MovementTypeClient = StompClientFactory(Constants.MODEL_NAMES.MOVEMENT_TYPE);
export default class MovementTypes extends React.Component {
  static OPERATIONS = {
    CREATE_NEW_MOVEMENT_TYPE: 0,
    TOGGLE_DETAILS: 1,
    SELECT_MOVEMENT_TYPE_BY_INDEX: 2,
    SELECT_MOVEMENT_TYPE_BY_ID: 3
  };
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Tipos de Movimiento"));
    this.state = {
      movementTypes: AppStore.Store.getState()["movementTypes"] || [],
      movementType: AppStore.Store.getState()["movementType"] || {},
      movementDetails: AppStore.Store.getState()["movementDetails"] || [],
      movements: AppStore.Store.getState()["movements"] || [],
      showCreate: false,
      query: {}
    };
    AppStore.Store.subscribe(() => {
      const crrState = AppStore.Store.getState();
      this.setState({
        movementTypes: crrState.movementTypes,
        movementType: crrState.movementType,
        movementDetails: crrState.movementDetails,
        movements: crrState.movements
      });
    });
  }
  dispatch(OPERATION, params) {
    const isOpen = this.state.showCreate;
    let willBeOpen = isOpen;
    const currentMovementType = this.state.movementType;
    let nextMovementType = currentMovementType;
    switch (OPERATION) {
      case MovementTypes.OPERATIONS.CREATE_NEW_MOVEMENT_TYPE:
        willBeOpen = true;
        break;
      case MovementTypes.OPERATIONS.SELECT_MOVEMENT_TYPE_BY_INDEX:
        willBeOpen = true;
        nextMovementType = this.state.movementTypes[params] || {};
        if (nextMovementType.id === currentMovementType.id) {
          nextMovementType = {};
          willBeOpen = false;
        }
        break;
      case MovementTypes.OPERATIONS.SELECT_MOVEMENT_TYPE_BY_ID:
        nextMovementType = { id: Number(params) };
        if (nextMovementType.id === currentMovementType.id) {
          nextMovementType = {};
          willBeOpen = false;
        }
        break;
      case MovementTypes.OPERATIONS.TOGGLE_DETAILS:
        nextMovementType = {};
        willBeOpen = !isOpen;
        break;
      default:
        break;
    }
    this.setState({ showCreate: willBeOpen });

    AppStore.Store.dispatch(
      AppStore.Actions.MovementTypeAction.selectMovementType(nextMovementType)
    );
  }
  list() {
    MovementTypeClient.list(this.state.query);
  }
  render() {
    return (
      <LVContainer.ListView
        showCreate={this.state.showCreate}
        onClickCreate={() => this.dispatch(MovementTypes.OPERATIONS.TOGGLE_DETAILS)}
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
                  placeholder="MovementTypeo"
                  onChange={selected =>
                    this.setState({
                      query: Object.assign(this.state.query || {}, {
                        movementDetail: selected.id
                      })
                    })
                  }
                  autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: "MovementTypeos"
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
                {this.state.movementTypes.map((profile, index) => (
                  <EV.Table.Row
                    key={profile.id}
                    isSelectable
                    onSelect={() =>
                      this.dispatch(
                        MovementTypes.OPERATIONS.SELECT_MOVEMENT_TYPE_BY_INDEX,
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
            { AppStore.Store.getState()["movementType"]!==undefined ? <MovementType></MovementType> : null }
          </LVContainer.ListViewBodyDetail>
        </LVContainer.ListViewBody>
      </LVContainer.ListView>
    );
  }
}
