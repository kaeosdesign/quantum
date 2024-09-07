import { SolidApexCharts } from "solid-apexcharts";
import { chartData } from "~/libs/chartData";

function Charts() {
  return (
    <SolidApexCharts
      series={undefined}
      type="bar"
      options={chartData()}
      class="w-full"
    />
  );
}

export default Charts;
