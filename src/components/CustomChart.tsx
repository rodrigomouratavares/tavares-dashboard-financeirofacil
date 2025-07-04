import { useMemo } from 'react'
import { useTheme } from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { CustomChartProps } from '@/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function CustomChart({ data, labels, type }: CustomChartProps) {
  const theme = useTheme()

  const options = useMemo(
    () => ({
      responsive: true,
      scaleShowVerticalLines: false,
      scales: {
        x: {
          border: { display: false },
          grid: { display: false },
          ticks: { color: theme.typographies.subtitle },
        },
        y: {
          border: { display: false },
          grid: { color: theme.appDefaultStroke },
          ticks: { color: theme.typographies.subtitle },
        },
      },
      plugins: {
        legend: { display: false },
      },
    }),
    [theme]
  )

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data,
          borderColor: 'rgb(12, 112, 242)',
          backgroundColor: 'rgba(12, 112, 242, 1)',
        },
      ],
    }),
    [labels, data]
  )

  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}

export default CustomChart
