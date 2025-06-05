import { formateDate } from "./formateDate";

export const settingChartData = (setChartData, prices) => {
  setChartData({
    labels: prices.map((price) => formateDate(price[0])),
    datasets: [
      {
        data: prices.map((price) => price[1]),
        fill: true,
        borderColor: "#3a80e9",
        backgroundColor: "rgba(58,128,233,0.1)",
        borderWidth: 2,
        tension: 0.25,
        pointRadius: 5,
      },
    ],
  });
};
