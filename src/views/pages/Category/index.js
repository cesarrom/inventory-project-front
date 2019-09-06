import React from "react";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
import "./styles.css";
import StompClientFactory from "../../../socket";
import AppStore from "../../../store";
console.log("Category Location!");
const CategoryStomp = StompClientFactory(
  AppStore.Constants.MODEL_NAMES.CATEGORY
);
export class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    const desiredCategory =
      AppStore.Store.getState()["categories"].find(
        category => category.id === props.categoryId
      ) || {};
    this.state = {
      willEdit: false,
      shouldSpan: false,
      category: desiredCategory,
      ___beforeCategory: JSON.stringify(desiredCategory || {}),
      tempChildren: []
    };
    AppStore.Store.subscribe(() => {
      this.setState({
        category:
          AppStore.Store.getState()["categories"].find(
            category => category.id === this.props.categoryId
          ) || {}
      });
    });
  }
  componentWillReceiveProps(props) {
    if (props.categoryId && props.categoryId !== this.state.category.id) {
      const category =
        AppStore.Store.getState()["categories"].find(
          category => category.id === props.categoryId
        ) || {};
      this.setState({
        category: category || {},
        ___beforeCategory: JSON.stringify(category || {}),
        tempChildren: [],
        shouldSpan: false
      });
    }
  }
  set(key, value) {
    const category = this.state.category;
    category[key] = value;
    this.setState({ category });
  }
  tempChildSet(index, key, value) {
    const tempChildren = this.state.tempChildren;
    const category = tempChildren[index];
    category[key] = value;
    this.setState({ tempChildren });
  }
  toggleEdit() {
    if (this.state.willEdit)
      this.setState({
        willEdit: !this.state.willEdit,
        category: JSON.parse(this.state.___beforeCategory)
      });
    else
      this.setState({
        willEdit: !this.state.willEdit,
        ___beforeCategory: JSON.stringify(this.state.category)
      });
  }
  save(formEvent, category, parentId) {
    if (category.id) {
      CategoryStomp.update(category.id, category);
    } else {
      CategoryStomp.create(
        Object.assign(
          parentId ? { parentCategory: { id: parentId } } : {},
          category
        )
      );
    }
    this.setState({ willEdit: false });
    formEvent.preventDefault();
  }
  saveChildren(formEvent, index) {
    this.save(
      formEvent,
      this.state.tempChildren[index],
      this.state.category.id
    );
    setTimeout(() => CategoryStomp.list({}), 500);
    this.removeTempCategory(index);
  }
  addTempCategory() {
    const tempChildren = []
      .concat(this.state.tempChildren)
      .concat([{ name: "" }]);
    this.setState({ tempChildren: tempChildren });
  }
  removeTempCategory(index) {
    const tempChildren = this.state.tempChildren;
    tempChildren.splice(index, 1);
    this.setState({ tempChildren: tempChildren.splice(index, 1) });
  }
  render() {
    const category = this.state.category || {};
    const children = category.subCategories || [];
    const currentPresentation = this.state.willEdit ? (
      <GS.Row>
        <form
          onSubmit={e => this.save(e, this.state.category, this.props.parentId)}
        >
          <GS.Grid fluid>
            <GS.Row>
              {children.length ? (
                <GS.Col>
                  <EV.IconButton
                    icon={!this.state.shouldSpan ? "caret-right" : "caret-down"}
                    appearance="minimal"
                    onClick={() =>
                      this.setState({ shouldSpan: !this.state.shouldSpan })
                    }
                  ></EV.IconButton>
                </GS.Col>
              ) : (
                <GS.Col>
                  <EV.IconButton
                    icon={"caret-right"}
                    appearance="minimal"
                    disabled
                  ></EV.IconButton>
                </GS.Col>
              )}
              <GS.Col>
                <EV.TextInput
                  value={category.name}
                  onChange={e => this.set("name", e.target.value)}
                ></EV.TextInput>
              </GS.Col>
              <GS.Col>
                <EV.IconButton
                  type="submit"
                  icon="small-tick"
                  appearance="minimal"
                  intent="success"
                ></EV.IconButton>
              </GS.Col>
              <GS.Col>
                <EV.IconButton
                  appearance="minimal"
                  intent="danger"
                  type="button"
                  icon="cross"
                  onClick={() => this.toggleEdit()}
                ></EV.IconButton>
              </GS.Col>
            </GS.Row>
          </GS.Grid>
        </form>
      </GS.Row>
    ) : (
      <GS.Row>
        <GS.Grid fluid>
          <GS.Row>
            {children.length ? (
              <GS.Col>
                <EV.IconButton
                  icon={!this.state.shouldSpan ? "caret-right" : "caret-down"}
                  appearance="minimal"
                  onClick={() =>
                    this.setState({ shouldSpan: !this.state.shouldSpan })
                  }
                ></EV.IconButton>
              </GS.Col>
            ) : (
              <GS.Col>
                <EV.IconButton
                  icon={"caret-right"}
                  appearance="minimal"
                  disabled
                ></EV.IconButton>
              </GS.Col>
            )}
            <GS.Col>
              <EV.Heading size={400}>{category.name}</EV.Heading>
            </GS.Col>
            <GS.Col>
              <EV.IconButton
                appearance="minimal"
                intent="success"
                type="button"
                icon="small-plus"
                onClick={() => this.addTempCategory()}
              ></EV.IconButton>
            </GS.Col>
            <GS.Col>
              <EV.IconButton
                appearance="minimal"
                intent="warning"
                type="button"
                icon="edit"
                onClick={() => this.toggleEdit()}
              ></EV.IconButton>
            </GS.Col>
          </GS.Row>
        </GS.Grid>
      </GS.Row>
    );
    return (
      <GS.Grid fluid style={{ paddingLeft: "2.5em" }}>
        {currentPresentation}
        {this.state.shouldSpan
          ? children.map(child => (
              <GS.Row>
                <CategoryItem
                  key={child.id}
                  categoryId={child.id}
                  parentId={this.props.categoryId}
                ></CategoryItem>
              </GS.Row>
            ))
          : null}
        {this.state.tempChildren.length ? (
          <GS.Row>
            <GS.Grid fluid>
              {this.state.tempChildren.map((tempChild, index) => (
                <GS.Row key={this.props.parentId + "-" + index}>
                  <form onSubmit={e => this.saveChildren(e, index)}>
                    <GS.Grid fluid>
                      <GS.Row>
                        <GS.Col>
                          <EV.TextInput
                            value={tempChild.name}
                            onChange={e =>
                              this.tempChildSet(index, "name", e.target.value)
                            }
                          ></EV.TextInput>
                        </GS.Col>
                        <GS.Col>
                          <EV.IconButton
                            type="submit"
                            icon="small-tick"
                            appearance="minimal"
                            intent="success"
                          ></EV.IconButton>
                        </GS.Col>
                        <GS.Col>
                          <EV.IconButton
                            type="button"
                            icon="cross"
                            appearance="minimal"
                            intent="danger"
                            onClick={() => this.removeTempCategory(index)}
                          ></EV.IconButton>
                        </GS.Col>
                      </GS.Row>
                    </GS.Grid>
                  </form>
                </GS.Row>
              ))}
            </GS.Grid>
          </GS.Row>
        ) : null}
      </GS.Grid>
    );
  }
}
export default class Category extends React.Component {
  constructor(props) {
    super(props);
    const desiredCategories = AppStore.Store.getState()["categories"].filter(
      cat => !cat.parentCategory || !cat.parentCategory.id
    );
    this.state = {
      willEdit: false,
      shouldSpan: false,
      categories: desiredCategories,
      tempChildren: []
    };
    AppStore.Store.subscribe(() => {
      const desiredCategories = AppStore.Store.getState()["categories"].filter(
        cat => !cat.category || !cat.category.id
      );
      this.setState({
        categories: desiredCategories
      });
    });
  }
  tempChildSet(index, key, value) {
    const tempChildren = this.state.tempChildren;
    const category = tempChildren[index];
    category[key] = value;
    this.setState({ tempChildren });
  }
  save(formEvent, category, parentId) {
    if (category.id) {
      CategoryStomp.update(category.id, category);
    } else {
      CategoryStomp.create(
        Object.assign(parentId ? { category: { id: parentId } } : {}, category)
      );
    }
    this.setState({ willEdit: false });
    formEvent.preventDefault();
  }
  saveChildren(formEvent, index) {
    this.save(formEvent, this.state.tempChildren[index], null);
    setTimeout(() => CategoryStomp.list({}), 500);
    this.removeTempCategory(index);
  }
  addTempCategory() {
    const tempChildren = []
      .concat(this.state.tempChildren)
      .concat([{ name: "" }]);
    this.setState({ tempChildren: tempChildren });
  }
  removeTempCategory(index) {
    const tempChildren = this.state.tempChildren;
    tempChildren.splice(index, 1);
    this.setState({ tempChildren: tempChildren });
  }
  render() {
    const children =
      this.state.categories.filter(
        cat => !cat.parentCategory || !cat.parentCategory.id
      ) || [];
    return (
      <GS.Grid fluid style={{ paddingLeft: "2.5em" }}>
        <GS.Row style={{ padding: "2em" }}>
          <GS.Col>
            <EV.Button
              type="button"
              icon="small-plus"
              appearance="primary"
              intent="success"
              onClick={() => this.addTempCategory()}
            >
              AÑADIR
            </EV.Button>
          </GS.Col>
        </GS.Row>
        {children.map(child => (
          <GS.Row>
            <CategoryItem
              key={child.id}
              categoryId={child.id}
              parentId={null}
            ></CategoryItem>
          </GS.Row>
        ))}
        {this.state.tempChildren.length ? (
          <GS.Row>
            <GS.Grid fluid>
              {this.state.tempChildren.map((tempChild, index) => (
                <GS.Row key={"root-temp-" + index}>
                  <form onSubmit={e => this.saveChildren(e, index)}>
                    <GS.Grid fluid>
                      <GS.Row>
                        <GS.Col>
                          <EV.TextInput
                            value={tempChild.name}
                            onChange={e =>
                              this.tempChildSet(index, "name", e.target.value)
                            }
                          ></EV.TextInput>
                        </GS.Col>
                        <GS.Col>
                          <EV.IconButton
                            type="submit"
                            icon="small-tick"
                            appearance="minimal"
                            intent="success"
                          ></EV.IconButton>
                        </GS.Col>
                        <GS.Col>
                          <EV.IconButton
                            type="button"
                            icon="cross"
                            appearance="minimal"
                            intent="danger"
                            onClick={() => this.removeTempCategory(index)}
                          ></EV.IconButton>
                        </GS.Col>
                      </GS.Row>
                    </GS.Grid>
                  </form>
                </GS.Row>
              ))}
            </GS.Grid>
          </GS.Row>
        ) : null}
      </GS.Grid>
    );
  }
}
