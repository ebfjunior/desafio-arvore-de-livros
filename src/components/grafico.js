import React, {Component} from 'react';
import Periodos from '../business/periodos';

export default class Grafico extends Component{
  constructor(props){
    super(props);

    const periodos = new Periodos();

    var lastYear = new Date(periodos.data_final);
    lastYear.setDate(lastYear.getDate() - 365); 

    this.state = {
      periodos: periodos.processados,
      data_inicial: lastYear.toISOString().slice(0, 10),
      data_final: periodos.data_final
    };
  }
  render(){
    return (<span>Hello, Árvore de Livros</span>);
  }
}