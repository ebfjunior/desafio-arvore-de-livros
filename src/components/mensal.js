import React, {Component} from 'react';
import Periodos from '../business/periodos';

export default class Mensal extends Component{
  constructor(props){
    super(props);

    const mes = Object.keys(props.periodosMes)[0];
    const periodos = props.periodosMes[mes];
    this.state = {mes, periodos};

    this.numeroDeSemanas = Periodos.countSemanasDoMes(props.ano, mes);
  }
  render(){
    return (<span>Hello, Árvore de Livros</span>);
  }
}