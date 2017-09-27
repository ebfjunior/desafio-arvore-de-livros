import React, { Component } from "react";

import Periodos from "../business/periodos";
import Semanal from "./semanal";

export default class Mensal extends Component {
  constructor(props) {
    super(props);

    const { ano } = props;
    const mes = props.mes;
    const periodos = props.periodosMes || {};
    this.state = { ano, mes, periodos };

    this.numeroDeSemanas = Periodos.countSemanasDoMes(ano, mes);
    this.labelMeses = {
      1: "Jan",
      2: "Fev",
      3: "Mar",
      4: "Abr",
      5: "Mai",
      6: "Jun",
      7: "Jul",
      8: "Ago",
      9: "Set",
      10: "Out",
      11: "Nov",
      12: "Dez"
    };

    this.renderSemanas = this.renderSemanas.bind(this);
  }
  renderSemanas() {
    let semanas = [];

    for (let i = 1; i <= this.numeroDeSemanas; i++) {
      const periodos = this.state.periodos[i] || {};
      const diasDaSemana = Periodos.getDiasDaSemana(
        this.state.ano,
        this.state.mes,
        i
      );
      semanas.push(
        <Semanal
          key={`${this.state.ano}${this.state.mes}${i}`}
          ano={this.state.ano}
          mes={this.state.mes}
          dias={diasDaSemana}
          periodosSemana={periodos}
          semana={i}
        />
      );
    }

    return semanas;
  }
  render() {
    return (
      <div className="mensal">
        <div className="label-mes">{this.labelMeses[this.state.mes]}</div>
        {this.renderSemanas()}
      </div>
    );
  }
}
