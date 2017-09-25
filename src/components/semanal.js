import React, {Component} from 'react';

export default class Semanal extends Component{
  constructor(props){
    super(props);

    const semana = Object.keys(props.periodosSemana)[0];
    const periodos = props.periodosSemana[semana];
    this.state = {semana, periodos};
  }
  render(){
    return (<span>Hello, Árvore de Livros</span>);
  }
}