import React, {Component} from 'react';

export default class Anual extends Component{
  constructor(props){
    super(props);

    const {periodos, data_inicial, data_final} = props;
    this.state = { periodos, data_inicial, data_final};
  }
  render(){
    return (<span>Hello, Árvore de Livros</span>);
  }
}