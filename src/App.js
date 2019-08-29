import React from 'react';
import './App.css';
import './socket'
import * as RT from "react-router-dom";
import * as GS from 'react-flexbox-grid';
import * as EV from 'evergreen-ui';
import Dashboard from './views/pages/Dashboard';
import Movements from './views/pages/Movements';
import Products from './views/pages/Products';
import Suppliers from './views/pages/Suppliers';
import Customers from './views/pages/Customers';

export default function App() {
  return (
    <RT.BrowserRouter style={{ margin: "0", padding: "0" }}>
      <GS.Grid fluid style={{ margin: "0", padding: "0" }}>
        <GS.Row top="xs" style={{ margin: "0" }}>
          {/*<EV.Pane color="tint-1">
            <GS.Col><RT.Link to="/"><EV.Icon icon="full-stacked-chart" color="success" marginRight={16} /></RT.Link></GS.Col> <GS.Col xs><RT.Link to="/"><EV.Heading is="h3"> Inventario</EV.Heading></RT.Link></GS.Col>
          </EV.Pane>*/}
          <GS.Col xs>
            <EV.Pane display="flex" padding={16} background="orangeTint" borderRadius={0}>
              <EV.Pane flex={1} alignItems="center" display="flex">
                <EV.Heading size={600}>
                  <RT.Link to="/"><EV.Icon icon="full-stacked-chart" color="success" marginRight={16} />&nbsp;Inventario</RT.Link>
                </EV.Heading>
              </EV.Pane>
              <EV.Pane>
                {/* Below you can see the marginRight property on a Button. 
                <EV.Button marginRight={16}>Button</EV.Button>
                <EV.Button appearance="primary">Primary Button</EV.Button>*/}
              </EV.Pane>
            </EV.Pane>
          </GS.Col>
        </GS.Row>
        <GS.Row between="xs" style={{ minHeight: "82vh", margin: "0" }}>
          <GS.Col xs={2}>
            <EV.Menu>
              <EV.Menu.Group style={{overflowY: "auto"}}>
                <RT.Link to="/"><EV.Menu.Item icon="dashboard">Tablero</EV.Menu.Item></RT.Link>

                <RT.Link to="/movements/"><EV.Menu.Item icon="changes">Movimientos</EV.Menu.Item></RT.Link>

                <RT.Link to="/products/"><EV.Menu.Item icon="list">Productos</EV.Menu.Item></RT.Link>

                <RT.Link to="/suppliers/"><EV.Menu.Item icon="diagram-tree">Proveedores</EV.Menu.Item></RT.Link>

                <RT.Link to="/customers/"><EV.Menu.Item icon="person">Clientes</EV.Menu.Item></RT.Link>
              </EV.Menu.Group>
              <EV.Menu.Divider />
              <EV.Menu.Group>
                <EV.Menu.Item intent="danger">Exportar ></EV.Menu.Item>
              </EV.Menu.Group>
            </EV.Menu>
          </GS.Col>
          <GS.Col xs style={{paddingTop: "1em"}}>
            <GS.Grid fluid>
              <RT.Route path="/" exact component={Dashboard} />
              <RT.Route path="/movements/" component={Movements} />
              <RT.Route path="/products/" component={Products} />
              <RT.Route path="/suppliers/" component={Suppliers} />
              <RT.Route path="/customers/" component={Customers} />
            </GS.Grid>
          </GS.Col>
        </GS.Row>
        <GS.Row style={{ margin: "0" }}>Foot</GS.Row>
      </GS.Grid>
    </RT.BrowserRouter>
  );
}
