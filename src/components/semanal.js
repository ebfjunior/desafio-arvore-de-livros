import React, { Component } from "react";
import Diario from "./diario";

export default class Semanal extends Component {
  constructor(props) {
    super(props);

    const { ano, mes, dias, semana } = props;

    const periodos = props.periodosSemana || {};

    if (dias.length < 7 && semana == 1)
      while (dias.length < 7) dias.unshift(null);

    this.state = { ano, mes, semana, dias, periodos };

    this.renderDias = this.renderDias.bind(this);
  }
  renderDias() {
    let dias = [];
    const strDates = Object.keys(this.state.periodos);
    this.state.dias.forEach((dia, idx) => {
      const date = dia
        ? new Date(this.state.ano, this.state.mes - 1, dia)
        : null;
      if (date) {
        const formatedDate = date.toISOString().slice(0, 10);
        const produtividade =
          Object.keys(this.state.periodos).indexOf(formatedDate) != -1
            ? this.state.periodos[formatedDate]
            : 0;

        dias.push(
          <Diario
            key={`${this.state.ano}${this.state.mes}${dia}`}
            date={formatedDate}
            produtividade={produtividade}
          />
        );
      } else {
        dias.push(
          <Diario
            key={`${this.state.ano}${this.state.mes}${this.state.semana}${idx}`}
            date={null}
            produtividade={null}
          />
        );
      }
    });

    return dias;
  }
  render() {
    return <div className="semanal">{this.renderDias()}</div>;
  }
}
