import React from "react";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import "./styles.css";
import StompClientFactory from "../../../socket";
import Constants from "../../../constants";
console.log("Customer Location!");
export default class Customer extends React.Component {
  props;
  constructor(props) {
    super(props);
    this.state = props.customerParams;
    this.___stateBackup = JSON.stringify(this.state);
    this.shouldUpdate = !!this.state.id;
    this.acceptButtonLabel = this.shouldUpdate ? "Actualizar" : "Guardar";
    this.stomp = StompClientFactory(Constants.MODEL_NAMES.CUSTOMER);
  }
  componentWillReceiveProps(props) {
    this.setState(props.customerParams);
    this.shouldUpdate = !!this.state.id;
    this.acceptButtonLabel = this.shouldUpdate ? "Actualizar" : "Guardar";
  }
  update(name, e) {
    this.setState({
      [name]:
        typeof e.target.value === "string"
          ? e.target.value.toUpperCase()
          : e.target.value
    });
  }
  save(e) {
    this.___stateBackup = JSON.stringify(this.state);
    if (this.shouldUpdate) this.stomp.update(this.state.id, this.state);
    else this.stomp.create(this.state);
    e.preventDefault();
  }
  clear() {
    this.setState(JSON.parse(this.___stateBackup));
  }
  render() {
    let clientName = this.state.name ? ": " + this.state.name : "";
    return (
      <form onSubmit={e => this.save(e)}>
        <GS.Grid fluid>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.Heading size={700} marginTop="default">
                Cliente{clientName}
              </EV.Heading>
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.code}
                onChange={e => this.update("code", e)}
                name="code"
                placeholder="CODIGO"
              />
            </GS.Col>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.name}
                onChange={e => this.update("name", e)}
                name="name"
                placeholder="NOMBRE"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={12}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.identification}
                onChange={e => this.update("identification", e)}
                name="name"
                placeholder="DNI"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.email}
                onChange={e => this.update("email", e)}
                name="email"
                placeholder="EMAIL"
              />
            </GS.Col>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.phone}
                onChange={e => this.update("phone", e)}
                name="phone"
                placeholder="TELEFONO"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.Textarea
                required
                width="100%"
                value={this.state.address}
                onChange={e => this.update("address", e)}
                name="address"
                placeholder="DIRECCION"
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
              {this.acceptButtonLabel}
            </EV.Button>
          </GS.Row>
        </GS.Grid>
      </form>
    );
  }
}
