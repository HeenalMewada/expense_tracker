import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ totalIncome, totalExpense, categoryMap }) {
  if (categoryMap && Object.keys(categoryMap).length > 0) {
    const chartData = {
  labels: Object.keys(categoryMap),
  datasets: [
    {
      data: Object.values(categoryMap),
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4CAF50",
        "#9C27B0",
      ],
    },
  ],
};
 return <Pie data={chartData} /> }
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };


  return <Pie data={data} />;
}

export default PieChart;