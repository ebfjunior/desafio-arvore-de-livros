import React, { Component } from "react";

export default class Diario extends Component {
  constructor(props) {
    super(props);

    const { date, produtividade } = props;
    this.state = {
      date,
      produtividade,
      active: date !== null && produtividade !== null
    };
  }

  render() {
    const colorClass = this.state.produtividade;
    const inactiveClass = !this.state.active ? "inactive" : "";

    const date = new Date(this.state.date);
    const tooltip = this.state.active
      ? `${this.state
          .produtividade} contribuições em ${date.getUTCDate()}/${date.getMonth() +
          1}/${date.getFullYear()}`
      : "";
    return (
      <div
        className={`diario c${this.state.produtividade} ${inactiveClass}`}
        title={tooltip}
        data-toggle="tooltip"
        data-placement="bottom"
      />
    );
  }
}
