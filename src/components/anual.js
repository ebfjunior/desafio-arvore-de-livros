import React, { Component } from "react";

import Periodos from '../business/periodos';
import Mensal from "./mensal";

export default class Anual extends Component {
  constructor(props) {
    super(props);

    const { periodos, data_inicial, data_final } = props;
    this.state = { periodos, data_inicial, data_final };
  }
  renderMeses() {
    let meses = [];
    const periodos = Periodos.getMesesDoPeriodo(this.state.data_inicial, this.state.data_final);

    for(const ano in periodos){
      const mesesDoAno = periodos[ano];
      meses = meses.concat(mesesDoAno.map((mes) => {
        const periodos = this.state.periodos[ano][mes] || {};
        return (<Mensal key={`${ano}${mes}`} ano={ano} mes={mes} periodosMes={periodos}/>);
      }));
    }

    return meses;
  }
  render() {
    return <div>{this.renderMeses()}</div>;
  }
}
