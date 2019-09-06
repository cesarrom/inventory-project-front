import React from 'react';
import './styles.css'
import AppStore from '../../../store';
console.log("Dashboard Location!");
export default class Dashboard extends React.Component {
  constructor() {
    super();
    AppStore.Store.dispatch(AppStore.Actions.RootAction.setTitle("Tablero"))
  }
  render() {
    return (
      <div> Dahsboard </div>
    )
  }
}