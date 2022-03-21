import { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Container, Pie, Text } from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  variantsData: Covid.Variant[];
};
const PieGraphic: FC<Props> = ({ variantsData }) => {
  const labels = variantsData.map((el) => el.variant);
  const data = {
    labels,
    datasets: [
      {
        label: 'labels',
        data: labels.map((el) => {
          const variantFind = variantsData.find((dat) => dat.variant === el);
          return variantFind.cases;
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Text>Casos registrados por variante</Text>
      {variantsData ? <Pie data={data} /> : null}
    </Container>
  );
};

export default PieGraphic;
