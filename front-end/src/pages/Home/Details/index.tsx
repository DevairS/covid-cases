import { FC } from 'react';
import { PieGraphic } from '~/components';
import { Container, Paper } from './styles';

type Props = {
  casesData: Covid.Data;
};
const Details: FC<Props> = ({ casesData }) => {
  return (
    <Container>
      <PieGraphic variantsData={casesData.casesByVariant} />
      <Paper>
        <h5>Total de casos registrados</h5>
        <h3>{casesData.allCases.casesSequences}</h3>
      </Paper>
      <Paper>
        <h5>Total de casos Confirmados</h5>
        <h3>{casesData.allCases.cases}</h3>
      </Paper>
    </Container>
  );
};

export default Details;
