import { useEffect } from "react";
import { useState } from "react";
import { RATE_URL } from "../config/app";

const loadData = async function () {
  const response = await fetch(RATE_URL);
  const data = await response.json();

  if (!data?.Valute?.USD) {
    return;
  }
  const rate = data.Valute.USD.Value;

  return rate;
};

export function FnCalc() {
  const [rate, setRate] = useState(100);
  const [amount, setAmount] = useState(10);
  const rub = (amount * rate).toFixed(2);

  useEffect(() => {
    loadData().then((rate) => {
      if (!rate) {
        return;
      }
      setRate(rate);
    });
  }, []);

  const onChange = (e) => {
    const amount = +e.target.value;

    setAmount(amount);
  };

  return (
    <div>
      <input type="number" value={amount} onChange={onChange} />
      <div>= {rub} руб.</div>
    </div>
  );
}
