import React, {Component} from 'react';
import Diario from './diario';

export default class Semanal extends Component{
  constructor(props){
    super(props);

    const {ano, mes} = props;
    const semana = Object.keys(props.periodosSemana)[0];
    const periodos = props.periodosSemana[semana];
    this.state = {ano, mes, semana, periodos};
  }
  renderDias(){
    let dias = [];

    for(let i = 1; i <= 7; i++){
      const periodos = this.state.periodos[i] || {};
      semanas.push(<Diario key={`${this.state.ano}${this.state.mes}${this.state.semana}${i}`} periodosSemana={periodos}/>);
    }

    return semanas;
  }
  render(){
    return (<span>Hello, Árvore de Livros</span>);
  }
}