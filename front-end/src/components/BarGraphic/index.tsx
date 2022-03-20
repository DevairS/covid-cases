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
        text: 'Rank dos Paises com mais casos de corona virus acumulados até o momento',
      },
    },
  };

  const labels = rankCases.map((el) => el.location);

  const data = {
    labels,
    datasets: [
      {
        label: 'Casos registrados',
        data: labels.map((el) => {
          const findLabel = rankCases.find((elem) => elem.location === el);
          return findLabel.cases;
        }),
        borderColor: 'rgb(233, 132, 17)',
        backgroundColor: 'rgba(233, 132, 17, 0.5)',
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
