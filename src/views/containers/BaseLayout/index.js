import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Movements from '../../pages/Movements';
import Products from '../../pages/Products';
import Suppliers from '../../pages/Suppliers';
import Customers from '../../pages/Customers';
import AppStore from '../../../store';
import * as RT from "react-router-dom";
import * as GS from 'react-flexbox-grid';
import * as EV from 'evergreen-ui';
import MovementTypes from '../../pages/MovementTypes';
import Repositories from '../../pages/Repositories';
import Categories from '../../pages/Categories';
console.log("Base Layout Location!");
export class BaseLayout extends React.Component {
  constructor() {
    super();
    const self = this;
    self.state = { title: self.getTitle() };
  }
  componentWillMount() {
    const self = this;
    //super.componentDidMount();
    AppStore.Store.subscribe(() => {
      const title = self.getTitle();
      self.setState({ title });
    });
  }
  getTitle() {
    try {
      return AppStore.Store.getState().title;
    }
    catch (ex) {
      console.error(ex);
      return "";
    }
  }
  render() {
    return (<RT.BrowserRouter style={{ margin: "0", padding: "0" }}>
      <GS.Grid fluid style={{ margin: "0", padding: "0" }}>
        <GS.Row top="xs" style={{ margin: "0", padding: "0" }}>
          <GS.Col xs>
            <EV.Pane display="flex" padding={16} background="orangeTint" borderRadius={0}>
              <EV.Pane flex={1} alignItems="center" display="flex">
                <EV.Heading size={600}>
                  <RT.Link to="/">
                    <EV.Icon icon="full-stacked-chart" color="success" marginRight={16} />
                    &nbsp;Inventario
                    </RT.Link>
                </EV.Heading>
              </EV.Pane>
              <EV.Pane>
                <EV.Heading size={600}>{this.state.title}</EV.Heading>
              </EV.Pane>
            </EV.Pane>
          </GS.Col>
        </GS.Row>
        <GS.Row between="xs" style={{ minHeight: "82vh", margin: "0" }}>
          <GS.Col {...(!this.state.showMenu ? {  }:{ xs: 2 })} onMouseOver={() => this.setState({ showMenu: true })} onMouseOut={() => this.setState({ showMenu: false })}>
            <EV.Menu>
              <EV.Menu.Group style={{ overflowY: "auto" }}>
                <RT.Link to="/">
                  <EV.Menu.Item icon="dashboard">{!this.state.showMenu ? null : "Tablero"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/movements/">
                  <EV.Menu.Item icon="changes">{!this.state.showMenu ? null : "Movimientos"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/categories/">
                  <EV.Menu.Item icon="sort">{!this.state.showMenu ? null : "Categorias de Producto"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/products/">
                  <EV.Menu.Item icon="list">{!this.state.showMenu ? null : "Productos"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/suppliers/">
                  <EV.Menu.Item icon="diagram-tree">{!this.state.showMenu ? null : "Proveedores"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/customers/">
                  <EV.Menu.Item icon="person">{!this.state.showMenu ? null : "Clientes"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/movement-types/">
                  <EV.Menu.Item icon="wrench">{!this.state.showMenu ? null : "Tipos de Movimiento"}</EV.Menu.Item>
                </RT.Link>

                <RT.Link to="/repositories/">
                  <EV.Menu.Item icon="database">{!this.state.showMenu ? null : "Repositorios"}</EV.Menu.Item>
                </RT.Link>
              </EV.Menu.Group>
              <EV.Menu.Divider />
              <EV.Menu.Group>
                <EV.Menu.Item intent="danger">{!this.state.showMenu ? null : "Exportar >"}</EV.Menu.Item>
              </EV.Menu.Group>
            </EV.Menu>
          </GS.Col>
          <GS.Col xs style={{ paddingTop: "1em" }}>
            <GS.Grid fluid>
              <RT.Route path="/" exact component={Dashboard} />
              <RT.Route path="/movements/" component={Movements} />
              <RT.Route path="/categories/" component={Categories} />
              <RT.Route path="/products/" component={Products} />
              <RT.Route path="/suppliers/" component={Suppliers} />
              <RT.Route path="/customers/" component={Customers} />
              <RT.Route path="/movement-types/" component={MovementTypes} />
              <RT.Route path="/repositories/" component={Repositories} />
            </GS.Grid>
          </GS.Col>
        </GS.Row>
        <GS.Row style={{ margin: "0" }}>Foot</GS.Row>
      </GS.Grid>
    </RT.BrowserRouter>);
  }
}
