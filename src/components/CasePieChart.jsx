import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CasePieChart = () => {
  const data = {
    labels: ["Won", "Lost", "Ongoing"],
    datasets: [
      {
        label: "Case Stats",
        data: [65, 15, 20],
        backgroundColor: ["#4caf50", "#f44336", "#ff9800"],
        borderColor: ["#3e8e41", "#d32f2f", "#f57c00"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-1/2 mx-auto">
      <Doughnut data={data} />
    </div>
  );
};

export default CasePieChart;
