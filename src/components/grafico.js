import React, { Component } from "react";
import Periodos from "../business/periodos";
import Anual from "./anual";

export default class Grafico extends Component {
  constructor(props) {
    super(props);

    const periodos = new Periodos();
    periodos.group();

    var lastYear = new Date();
    lastYear.setDate(lastYear.getDate() - 365);

    this.state = {
      periodos: periodos,
      data_inicial: lastYear.toISOString().slice(0, 10),
      data_final: new Date().toISOString().slice(0, 10)
    };
  }
  render() {
    return (
      <div className="grafico">
        <div className="label-semanas">
          <div>Dom</div>
          <div />
          <div>Ter</div>
          <div />
          <div>Qui</div>
          <div />
          <div>Sab</div>
        </div>
        <Anual
          periodos={this.state.periodos.grouped}
          data_inicial={this.state.data_inicial}
          data_final={this.state.data_final}
        />
      </div>
    );
  }
}
