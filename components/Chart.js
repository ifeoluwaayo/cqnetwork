import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
	labels: ["Presale", "Liquidity", "Team & Developers", "Founders Board"],
	datasets: [
		{
			data: [35, 35, 15, 15],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#A7F432"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#A7F432"],
		},
	],
};

function Chart() {
	return (
		<div>
			<Doughnut data={data} width={100} height={100} />
		</div>
	);
}

export default Chart;
