import React, { Component } from "react";

export default class Diario extends Component {
  constructor(props) {
    super(props);

    const { periodo } = props;
    this.state = { periodo };
  }
  render() {
    return (
      <svg
        width="20"
        height="20"
        x="0"
        y={this.props.y}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" fill="#3FC0D9" />
      </svg>
    );
  }
}
