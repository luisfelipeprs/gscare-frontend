import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartProps {
  data: number[];
  categories: string[];
}

const LineChart: React.FC<ChartProps> = ({ data, categories }) => {
  const chartOptions: ApexOptions = {
    chart: {
      id: 'line-chart',
      type: 'line',
    },
    xaxis: {
      categories: categories,
    },
  };

  const series = [
    {
      name: 'Série 1',
      data: data,
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default LineChart;
