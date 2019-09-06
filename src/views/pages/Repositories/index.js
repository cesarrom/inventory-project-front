import React from "react";
import "./styles.css";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import AppStore from "../../../store";
import StompClientFactory from "../../../socket";
import Repository from "../Repository";
import * as LVContainer from "../../containers/ListView";
import Constants from "../../../constants";
console.log("Repositorys Location!");
const tableConfig = [
  {
    label: "ID",
    field: "id"
  },
  {
    label: "Nombre",
    field: "name"
  },
  {
    label: "Es externo",
    field: "external"
  },
  {
    label: "% efectivo del precio",
    field: "effectivePricePercentage"
  }
];
const RepositoryClient = StompClientFactory(Constants.MODEL_NAMES.REPOSITORY);
export default class Repositorys extends React.Component {
  static OPERATIONS = {
    CREATE_NEW_REPOSITORY: 0,
    TOGGLE_DETAILS: 1,
    SELECT_REPOSITORY_BY_INDEX: 2,
    SELECT_REPOSITORY_BY_ID: 3
  };
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Repositorios"));
    this.state = {
      repositories: AppStore.Store.getState()["repositories"] || [],
      repository: AppStore.Store.getState()["repository"] || {},
      movementDetails: AppStore.Store.getState()["movementDetails"] || [],
      movements: AppStore.Store.getState()["movements"] || [],
      showCreate: false,
      query: {}
    };
    AppStore.Store.subscribe(() => {
      const crrState = AppStore.Store.getState();
      this.setState({
        repositories: crrState.repositories,
        repository: crrState.repository,
        movementDetails: crrState.movementDetails,
        movements: crrState.movements
      });
    });
  }
  dispatch(OPERATION, params) {
    const isOpen = this.state.showCreate;
    let willBeOpen = isOpen;
    const currentRepository = this.state.repository;
    let nextRepository = currentRepository;
    switch (OPERATION) {
      case Repositorys.OPERATIONS.CREATE_NEW_REPOSITORY:
        willBeOpen = true;
        break;
      case Repositorys.OPERATIONS.SELECT_REPOSITORY_BY_INDEX:
        willBeOpen = true;
        nextRepository = this.state.repositories[params] || {};
        if (nextRepository.id === currentRepository.id) {
          nextRepository = {};
          willBeOpen = false;
        }
        break;
      case Repositorys.OPERATIONS.SELECT_REPOSITORY_BY_ID:
        nextRepository = { id: Number(params) };
        if (nextRepository.id === currentRepository.id) {
          nextRepository = {};
          willBeOpen = false;
        }
        break;
      case Repositorys.OPERATIONS.TOGGLE_DETAILS:
        nextRepository = {};
        willBeOpen = !isOpen;
        break;
      default:
        break;
    }
    this.setState({ showCreate: willBeOpen });

    AppStore.Store.dispatch(
      AppStore.Actions.RepositoryAction.selectRepository(nextRepository)
    );
  }
  list() {
    RepositoryClient.list(this.state.query);
  }
  render() {
    return (
      <LVContainer.ListView
        showCreate={this.state.showCreate}
        onClickCreate={() => this.dispatch(Repositorys.OPERATIONS.TOGGLE_DETAILS)}
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
                  placeholder="Repositoryo"
                  onChange={selected =>
                    this.setState({
                      query: Object.assign(this.state.query || {}, {
                        movementDetail: selected.id
                      })
                    })
                  }
                  autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: "Repositoryos"
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
                {this.state.repositories.map((profile, index) => (
                  <EV.Table.Row
                    key={profile.id}
                    isSelectable
                    onSelect={() =>
                      this.dispatch(
                        Repositorys.OPERATIONS.SELECT_REPOSITORY_BY_INDEX,
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
            { AppStore.Store.getState()["repository"]!==undefined ? <Repository></Repository> : null }
          </LVContainer.ListViewBodyDetail>
        </LVContainer.ListViewBody>
      </LVContainer.ListView>
    );
  }
}
