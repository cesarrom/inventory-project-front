import React from "react";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import "./styles.css";
import StompClientFactory from "../../../socket";
import Constants from "../../../constants";
import AppStore from "../../../store";
console.log("Repository Location!");
export default class Repository extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repository: {}, categoriesPath: [] };
    this.stomp = StompClientFactory(Constants.MODEL_NAMES.REPOSITORY);
    AppStore.Store.subscribe(() => {
      this.init();
    });
  }
  init() {
    const repository = AppStore.Store.getState()["repository"] || {};
    this.setState({
      repository,
      shouldUpdate: !!repository.id,
      acceptButtonLabel: !!repository.id ? "Actualizar" : "Guardar"
    });
    this.repositoryBackup = JSON.stringify(this.state);
  }
  componentDidMount() {
    this.init();
  }
  save(e) {
    this.repositoryBackup = JSON.stringify(this.state.repository);
    if (this.state.shouldUpdate)
      this.stomp.update(this.state.repository.id, this.state.repository);
    else this.stomp.create(this.state.repository);
    e.preventDefault();
  }
  set(key, value, e) {
    const repository = this.state.repository;
    repository[key] = value;
    this.setState({ repository });
    if (e && e.preventDefault) e.preventDefault();
  }
  clear() {
    this.setState(JSON.parse(this.repositoryBackup));
  }
  render() {
    let repositoryName = this.state.name ? ": " + this.state.name : "";
    return (
      <form onSubmit={e => this.save(e)}>
        <GS.Grid fluid>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={12}>
              <EV.Heading size={700} marginTop="default">
                Repositorio{repositoryName}
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
                label="ES EXTERNO"
                checked={this.state.repository.external}
                onChange={e => this.set("external", e.target.checked)}
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col
              style={{
                padding: "1em"
              }}
              xs={12}
            >
              <EV.TextInput
                required
                width="100%"
                value={this.state.repository.name}
                onChange={e => this.set("name", e.target.value)}
                name="name"
                placeholder="NOMBRE"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={12}>
              <EV.TextInput
                type="number"
                required
                width="100%"
                value={this.state.repository.effectivePricePercentage}
                onChange={e =>
                  this.set("effectivePricePercentage", e.target.value)
                }
                name="effectivePricePercentage"
                placeholder="% EFECTIVO DEL PRECIO"
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
