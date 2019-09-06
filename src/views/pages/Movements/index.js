import React from 'react';
import './styles.css'
import AppStore from '../../../store';
console.log("Movements Location!");
export default class Movements extends React.Component {
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Movimientos"))
  }
  render() {
    return (
      <div> Movements </div>
    )
  }
}