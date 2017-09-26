import React, {Component} from 'react';

import Periodos from '../business/periodos';
import Semanal from './semanal';

export default class Mensal extends Component{
  constructor(props){
    super(props);

    const {ano} = props;
    const mes = props.mes;
    const periodos = props.periodosMes || {};
    this.state = {ano, mes, periodos};

    this.numeroDeSemanas = Periodos.countSemanasDoMes(ano, mes);

    this.renderSemanas = this.renderSemanas.bind(this);
  }
  renderSemanas(){
    let semanas = [];

    for(let i = 1; i <= this.numeroDeSemanas; i++){
      const periodos = this.state.periodos[i] || {};
      semanas.push(<Semanal key={`${this.state.ano}${this.state.mes}${i}`} ano={this.state.ano} mes={this.state.mes} periodosSemana={periodos}/>);
    }

    return semanas;
  }
  render(){
    return (<div>{this.renderSemanas()}</div>);
  }
}