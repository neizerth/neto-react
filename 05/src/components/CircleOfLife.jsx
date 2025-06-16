import React, { Component } from "react";

export class CircleOfLife extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();

    console.log("constructor");

    console.log(this.elementRef);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render", Date(), this.elementRef);

    return (
      <div ref={this.elementRef} onClick={() => console.log(this.elementRef)}>
        Hello, World
      </div>
    );
  }
}

CircleOfLife.defaultProps = {
  title: "Born!",
};
