import React, { Component } from "react";

export class CircleOfLife extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();

    console.log("CircleOfLife:constructor", this.elementRef, props);
  }
  componentDidMount() {
    console.log("CircleOfLife:componentDidMount", this.elementRef);
  }
  render() {
    console.log("CircleOfLife: render", Date(), this.elementRef);

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
