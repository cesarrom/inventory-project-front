import React from 'react';
import * as GS from 'react-flexbox-grid';
import * as Eve from 'evergreen-ui'
import './styles.css'

export default class Customer extends React.Component {
  render() {
    return (
      <GS.Container>
        <GS.Row>
          <GS.Col>
            <Eve.Autocomplete></Eve.Autocomplete>
          </GS.Col>
        </GS.Row>
        <GS.Row>
          <GS.Col>
          </GS.Col>
        </GS.Row>
      </GS.Container>
    )
  }
}