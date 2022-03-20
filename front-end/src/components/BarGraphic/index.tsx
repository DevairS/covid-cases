import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Container } from './styles';

type Props = {
  rankCases: Covid.Rank[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
const BarGraphic: FC<Props> = ({ rankCases }) => {
  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  const labels = rankCases.map((el) => el.location);

  const data = {
    labels,
    datasets: [
      {
        label: 'Casos de covid',
        data: labels.map((el) => {
          const findLabel = rankCases.find((elem) => elem.location === el);
          return findLabel.cases;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
};

export default BarGraphic;
