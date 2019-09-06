import React from "react";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import "./styles.css";
import StompClientFactory from "../../../socket";
import Constants from "../../../constants";
import AppStore from "../../../store";
console.log("Product Location!");
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, categoriesPath: [] };
    this.stomp = StompClientFactory(Constants.MODEL_NAMES.PRODUCT);
    AppStore.Store.subscribe(() => {
      this.init();
    });
  }
  init() {
    const product = AppStore.Store.getState()["product"] || {};
    if (product && product.category && product.category.id)
      this.reverseCategoryPath(
        AppStore.Store.getState()["categories"].find(
          cat => cat.id === product.category.id
        )
      );
    this.setState({
      product,
      shouldUpdate: !!product.id,
      acceptButtonLabel: !!product.id ? "Actualizar" : "Guardar"
    });
    this.productBackup = JSON.stringify(this.state);
  }
  componentDidMount() {
    this.init();
  }
  reverseCategoryPath(category) {
    if (category && category.id) {
      const arr = [category];
      while (category.parentCategory && category.parentCategory.id) {
        category = AppStore.Store.getState()["categories"].find(
          cat => cat.id === category.parentCategory.id
        );
        arr.push(category);
      }
      this.setState({ categoriesPath: arr.reverse() });
    }
  }
  addCategory(category) {
    let categoriesPath = this.state.categoriesPath;
    if (categoriesPath.find(cat => cat.id === category.id))
      categoriesPath = [category];
    else categoriesPath.push(category);
    const product = this.state.product;
    product.currentCategory = product.category = { id: category.id };
    this.setState({ categoriesPath, product });
  }
  clearCategory() {
    const product = this.state.product;
    product.currentCategory = product.category = null;
    this.setState({ categoriesPath: [], product });
  }
  componentWillReceiveProps(props) {
    this.setState(props.productParams);
    this.shouldUpdate = !!this.state.id;
    this.acceptButtonLabel = this.shouldUpdate ? "Actualizar" : "Guardar";
  }
  save(e) {
    this.productBackup = JSON.stringify(this.state.product);
    if (this.state.shouldUpdate)
      this.stomp.update(this.state.product.id, this.state.product);
    else this.stomp.create(this.state.product);
    e.preventDefault();
  }
  set(key, value, e) {
    const product = this.state.product;
    product[key] = value;
    this.setState({ product });
    if (e && e.preventDefault) e.preventDefault();
  }
  setPhoto(blob) {
    const self = this;
    const reader = new FileReader();
    reader.onload = function() {
      const dataUrl = reader.result;
      const base64 = dataUrl.split(",")[1];
      self.set("photo", base64);
    };
    reader.readAsDataURL(blob);
  }
  clear() {
    this.setState(JSON.parse(this.productBackup));
  }
  render() {
    let productName = this.state.name ? ": " + this.state.name : "";
    return (
      <form onSubmit={e => this.save(e)}>
        <GS.Grid fluid>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={6}>
              <EV.Heading size={700} marginTop="default">
                Producto{productName}
              </EV.Heading>
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.Combobox
                required
                selectedItem={this.state.product.supplier}
                items={AppStore.Store.getState()["suppliers"]}
                onChange={selected => this.set("supplier", { id: selected.id })}
                itemToString={item =>
                  item ? item.code + " - " + item.name : ""
                }
                placeholder="Proveedor"
                autocompleteProps={{
                  // Used for the title in the autocomplete.
                  title: "Proveedor"
                }}
              />
            </GS.Col>
          </GS.Row>
          <GS.Row style={{ paddingTop: "1em" }}>
            <GS.Col xs style={{ padding: "1em" }}>
              <EV.TagInput
                inputProps={{ placeholder: "Categoría Actual" }}
                values={(this.state.categoriesPath || []).map(
                  catCrr => catCrr.name
                )}
                disabled
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs style={{ padding: "1em" }}>
              <EV.Combobox
                required
                items={AppStore.Store.getState()["categories"].filter(
                  category => {
                    if (
                      this.state.product.currentCategory &&
                      this.state.product.currentCategory.id
                    )
                      return (
                        category.parentCategory &&
                        category.parentCategory.id ===
                          this.state.product.currentCategory.id
                      );
                    return !category.parentCategory;
                  }
                )}
                onChange={selected => this.addCategory(selected)}
                itemToString={item => (item ? item.name : "")}
                placeholder="Categoria"
                autocompleteProps={{
                  // Used for the title in the autocomplete.
                  title: "Categoria"
                }}
              />
            </GS.Col>
            <GS.Col xs={2} style={{ padding: "1em" }}>
              <EV.Button type="button" onClick={() => this.clearCategory()}>
                RESETEAR
              </EV.Button>
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={12}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.product.code}
                onChange={e => this.set("code", e.target.value)}
                name="code"
                placeholder="CODIGO"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col style={{ padding: "1em" }} xs={12}>
              <EV.TextInput
                required
                width="100%"
                value={this.state.product.name}
                onChange={e => this.set("name", e.target.value)}
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
                value={this.state.product.unitType}
                onChange={e => this.set("unitType", e.target.value)}
                name="unitType"
                placeholder="UNIDAD DE MEDIDA"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.Textarea
                required
                width="100%"
                value={this.state.product.description}
                onChange={e => this.set("description", e.target.value)}
                name="description"
                placeholder="DESCRIPCION"
              />
            </GS.Col>
          </GS.Row>
          <GS.Row>
            <GS.Col xs={12} style={{ padding: "1em" }}>
              <EV.TextInput
                type="number"
                required
                width="100%"
                value={this.state.product.basePrice}
                onChange={e => this.set("basePrice", e.target.value)}
                name="basePrice"
                placeholder="PRECIO BASE"
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
