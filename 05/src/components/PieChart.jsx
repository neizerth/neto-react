import { Component, createRef } from "react";

import Chart from "chart.js/auto";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
};

export class PieChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
  }
  componentDidMount() {
    const node = this.chartRef.current;

    if (this.chart) {
      return;
    }
    this.chart = new Chart(node, config);
  }

  render() {
    return <canvas ref={this.chartRef} id="pie-chart" />;
  }
}
