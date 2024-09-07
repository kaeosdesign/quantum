import { createSignal, createEffect } from "solid-js";
const [chartData, setChartData] = createSignal<ChartData>(undefined);


type ChartData = {
  series: {
    name: string;
    data: number[];
  }[];
  xaxis: {
    categories: string[];
  };
} | undefined

createEffect(() => {
  const fetchData = async () => {
    const res = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=52537b8d95781e9dd0c448f274b4caaa",
    );
    const data = await res.json();
    setChartData({
      series: [
        {
          name: "Latitudes in London",
          data: data.map((d: { lat: number }) => d.lat),
        },
      ],
      xaxis: { categories: data.map((d: { name: string }) => d.name) },
    });
  };
  fetchData();
});

export { chartData };
