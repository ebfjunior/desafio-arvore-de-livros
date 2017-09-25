import React, { Component } from "react";

import Mensal from "./mensal";
export default class Anual extends Component {
  constructor(props) {
    super(props);

    const { periodos, data_inicial, data_final } = props;
    this.state = { periodos, data_inicial, data_final };
  }
  renderMeses() {
    let meses = [];
    for (let i = 1; i <= 13; i++) {
      meses.push(<Mensal />);
    }
  }
  render() {
    return <div>{this.renderMeses()}</div>;
  }
}
