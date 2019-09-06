import React from "react";
import * as GS from "react-flexbox-grid";
import * as EV from "evergreen-ui";
console.log("List view location")
export const ListViewBodyDetail = props => (
  <GS.Grid fluid>{props.children}</GS.Grid>
);

export const ListViewBodyContent = props => (
  <GS.Grid fluid>
    <EV.Card style={{ padding: "1em" }} background="light">
      {props.children}
    </EV.Card>
  </GS.Grid>
);
export class ListViewBody extends React.Component {
  static STATES = {
    ONLY_LIST: 0,
    LIST_AND_DETAIL: 1
  };
  render() {
    let width = 0;
    let children = <div></div>;
    if (
      this.props &&
      this.props.state &&
      this.props.state === ListViewBody.STATES.LIST_AND_DETAIL
    ) {
      width = 5;
      children = React.Children.map(this.props.children, (child, i) => {
        if (child && child.type && child.type.name === "ListViewBodyDetail")
          return child;
        return;
      });
    }

    return (
      <GS.Row>
        <GS.Col xs={12 - width} style={{ overflowX: "auto" }}>
          {React.Children.map(this.props.children, (child, i) => {
            if (
              child &&
              child.type &&
              child.type.name === "ListViewBodyContent"
            )
              return child;
            return;
          })}
        </GS.Col>
        <GS.Col xs={width}>{children}</GS.Col>
      </GS.Row>
    );
  }
}
export const ListViewHeader = props => (
  <GS.Row>
    <GS.Col xs={10}>{props.children}</GS.Col>
    <GS.Col xs={2}>
      <EV.Button
        onClick={() => (props && props.onSearch ? props.onSearch() : null)}
      >
        <EV.Icon icon="search" />
        &nbsp;&nbsp;Buscar
      </EV.Button>
      <EV.Button
        icon="plus"
        onClick={() => (props && props.onCreate ? props.onCreate() : null)}
      >
        <EV.Icon icon="add" />
        &nbsp;&nbsp;Nuevo
      </EV.Button>
    </GS.Col>
  </GS.Row>
);
export const ListView = props => {
  const bodyViewState =  props && props.showCreate
    ? ListViewBody.STATES.LIST_AND_DETAIL
    : ListViewBody.STATES.ONLY_LIST;
  return (
    <GS.Grid fluid>
      {React.Children.map(props.children, (child, i) => {
        if (child && child.type && child.type.name === "ListViewHeader") {
          return React.cloneElement(child, {
            onCreate: props && props.onClickCreate ? props.onClickCreate : () => { console.log("ON CREATE CLICKED!") },
            onSearch: props && props.onClickSearch ? props.onClickSearch : () => { console.log("ON SEARCH CLICKED!") }
          });
        }
        return;
      })}
      {React.Children.map(props.children, (child, i) => {
        if (child && child.type && child.type.name === "ListViewBody") {
          return React.cloneElement(child, { state: bodyViewState });
        }
        return;
      })}
    </GS.Grid>
  );
};
