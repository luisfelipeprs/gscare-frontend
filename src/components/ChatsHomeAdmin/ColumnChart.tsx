import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ColumnChartProps {
  data: number[];
  categories: string[];
  title: string;
}

const ColumnChart: FC<ColumnChartProps> = ({ data, categories, title }) => {
  const chartData: { series: ApexAxisChartSeries; options: ApexOptions } = {
    series: [{ name: 'Inflation', data }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number) => {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories,
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: (val: number) => {
            return val + '%';
          },
        },
      },
      title: {
        text: title,
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
