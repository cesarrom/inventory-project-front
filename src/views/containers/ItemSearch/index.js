import React from 'react';
import './styles.css';
import * as GS from 'react-flexbox-grid';
import * as EV from 'evergreen-ui';

export class ItemSearch extends React.Component {
  constructor(SearchElement) {
    this.SearchElement = SearchElement;
  }
  render() {
    return (
      <GS.Grid fluid>
        <GS.Row>
          {() => { if(this.SearchElement){ const SE = this.SearchElement; return <SE></SE> }}}
        </GS.Row>
      </GS.Grid>
    );
  }
}