"use client";

import { Line, Bar, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps<T extends "line" | "bar" | "scatter"> = {
  type: T;
  data: ChartData<T>;
  options: ChartOptions<T>;
};

export default function Chart<T extends "line" | "bar" | "scatter">({
  type,
  data,
  options,
}: ChartProps<T>) {
  const ChartComponent = {
    line: Line,
    bar: Bar,
    scatter: Scatter,
  }[type] as React.ElementType<{
    data: ChartData<T>;
    options: ChartOptions<T>;
  }>;

  return <ChartComponent data={data} options={options} />;
}
