import { Component } from "react";

export class HeartCC extends Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="heart" onClick={this.increment}>
        {count}
      </div>
    );
  }
}
