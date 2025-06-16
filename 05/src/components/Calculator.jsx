import { Component } from "react";
import { RATE_URL } from "../config/app";

export class Caluclator extends Component {
  state = {
    amount: 10,
    rate: 100,
  };

  getValue() {
    const { amount, rate } = this.state;

    return (amount * rate).toFixed(2);
  }

  onAmountChange(amount) {
    this.setState({ amount });
  }

  async componentDidMount() {
    const response = await fetch(RATE_URL);
    const data = await response.json();

    if (!data?.Valute?.USD) {
      return;
    }
    const rate = data.Valute.USD.Value;

    this.setState({ rate });
  }

  render() {
    const rub = this.getValue();
    const { amount } = this.state;

    const onChange = (e) => {
      const amount = +e.target.value;

      this.onAmountChange(amount);
    };

    return (
      <div>
        <input type="number" value={amount} onChange={onChange} />
        <div>= {rub} руб.</div>
      </div>
    );
  }
}
