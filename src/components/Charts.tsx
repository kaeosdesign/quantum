import { SolidApexCharts } from "solid-apexcharts";
import { chartData } from "~/libs/chartData";

function Charts() {
  return (
    <SolidApexCharts
      series={undefined}
      width="800"
      type="bar"
      options={chartData()}
    />
  );
}

export default Charts;
