import React from "react";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import "./styles.css";
import StompClientFactory from "../../../socket";
import Constants from "../../../constants";
import AppStore from "../../../store";
console.log("MovementType Location!");
export default class MovementType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movementType: {}, categoriesPath: [] };
    this.stomp = StompClientFactory(Constants.MODEL_NAMES.MOVEMENT_TYPE);
    AppStore.Store.subscribe(() => {
      this.init();
    });
  }
  init() {
    const movementType = AppStore.Store.getState()["movementType"] || {};
    this.setState({
      movementType,
      shouldUpdate: !!movementType.id,
      acceptButtonLabel: !!movementType.id ? "Actualizar" : "Guardar"
    });
    this.movementTypeBackup = JSON.stringify(this.state);
  }
  componentDidMount() {
    this.init();
  }
  save(e) {
    this.movementTypeBackup = JSON.stringify(this.state);
    if (this.state.shouldUpdate)
      this.stomp.update(this.state.movementType.id, this.state.movementType);
    else this.stomp.create(this.state.movementType);
    e.preventDefault();
  }
  set(key, value, e) {
    const movementType = this.state.movementType;
    movementType[key] = value;
    this.setState({ movementType });
    if (e && e.preventDefault) e.preventDefault();
  }
  clear() {
    this.setState(JSON.parse(this.movementTypeBackup));
  }
  render() {
    let movementTypeName = this.state.name ? ": " + this.state.name : "";
    return (
      <form onSubmit={e => this.save(e)}>
        <GS.Grid fluid>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.Heading size={700} marginTop="default">
                TIPO DE MOVIMIENTO{movementTypeName}
              </EV.Heading>
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col
              style={{
                padding: "1em"
              }}
              xs={6}
            >
              <EV.Checkbox
                label="REQUIERE MOVIMIENTO PADRE"
                checked={this.state.movementType.parentMovementRequired}
                onChange={e => this.set("parentMovementRequired", e.target.checked)}
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.Combobox
                required
                selectedItem={this.state.movementType.sourceRepository}
                items={AppStore.Store.getState()["repositories"]}
                onChange={selected => this.set("sourceRepository", selected)}
                itemToString={item =>
                  item ? item.effectivePricePercentage + "% - " + item.name : ""
                }
                placeholder="REPOSITORIO ORIGEN"
                autocompleteProps={{
                  title: "Repositorio Origen"
                }}
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.Combobox
                required
                selectedItem={this.state.movementType.targetRepository}
                items={AppStore.Store.getState()["repositories"]}
                onChange={selected => this.set("targetRepository", selected)}
                itemToString={item =>
                  item ? item.effectivePricePercentage + "% - " + item.name : ""
                }
                placeholder="REPOSITORIO DESTINO"
                autocompleteProps={{
                  title: "Repositorio Destino"
                }}
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={12}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.movementType.name}
                onChange={e => this.set("name", e.target.value)}
                name="name"
                placeholder="NOMBRE"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.Textarea
                width="100%"
                value={this.state.movementType.description}
                onChange={e => this.set("description", e.target.value)}
                name="description"
                placeholder="DESCRIPCION"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <EV.Button
              intent="danger"
              appearance="primary"
              type="button"
              onClick={() => this.clear()}
            >
              Limpiar
            </EV.Button>
            <EV.Button appearance="primary" intent="success" type="submit">
              {this.state.acceptButtonLabel}
            </EV.Button>
          </GS.Row>
        </GS.Grid>
      </form>
    );
  }
}
