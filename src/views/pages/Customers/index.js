import React from 'react';
import './styles.css'
import * as GS from 'react-flexbox-grid';
import * as EV from 'evergreen-ui';
import store from '../../../store/Store'
const profiles = [{
  name: "Cesar",
  lastActivity: new Date().toLocaleDateString(),
  id: 1,
  ltv: 5
}];
export default class Customers extends React.Component {
  constructor() {
    super();
    this.state = { showFilters: false }
  }
  render() {
    let FilterElement = this.state.showFilters ? (<GS.Row>Hola</GS.Row>) : (<div></div>);
    return (
      <GS.Grid fluid>
        <GS.Row>
          <GS.Col xs><EV.SearchInput width="100%"></EV.SearchInput></GS.Col>
          <GS.Col><EV.Button onClick={() => { this.setState({ showFilters: !this.state.showFilters }) }}><EV.Icon icon="properties" />&nbsp;&nbsp;Filters</EV.Button><EV.Button icon="plus"><EV.Icon icon="add" />&nbsp;&nbsp;Create</EV.Button></GS.Col>
        </GS.Row>
        {FilterElement}
        <EV.Card style={{ padding: "1em" }} background="light">
          <EV.Table>
            <EV.Table.Head>
              <EV.Table.SearchHeaderCell />
              <EV.Table.TextHeaderCell>
                Last Activity
              </EV.Table.TextHeaderCell>
              <EV.Table.TextHeaderCell>
                ltv
              </EV.Table.TextHeaderCell>
            </EV.Table.Head>
            <EV.Table.Body height={240}>
              {profiles.map(profile => (
                <EV.Table.Row key={profile.id} isSelectable onSelect={() => alert(profile.name)}>
                  <EV.Table.TextCell>{profile.name}</EV.Table.TextCell>
                  <EV.Table.TextCell>{profile.lastActivity}</EV.Table.TextCell>
                  <EV.Table.TextCell isNumber>
                    {profile.ltv}
                  </EV.Table.TextCell>
                </EV.Table.Row>
              ))}
            </EV.Table.Body>
          </EV.Table>
        </EV.Card>
      </GS.Grid>
    );
  }
}