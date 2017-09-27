import React, { Component } from "react";

export default class Diario extends Component {
  constructor(props) {
    super(props);

    const { date, produtividade } = props;
    this.state = { date, produtividade };
  }
  render() {
    const colorClass = this.state.produtividade 
    const inactiveClass = this.state.date === null && this.state.produtividade === null ? "inactive" : "";
    
    return (
      <div className={`diario c${this.state.produtividade} ${inactiveClass}`} title={this.state.date}></div>
    );
  }
}
