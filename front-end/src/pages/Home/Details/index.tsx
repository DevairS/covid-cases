import { FC } from 'react';
import { PieGraphic } from '~/components';
import { Container, Paper, Text, TextTitle } from './styles';

type Props = {
  casesData: Covid.Data;
};
const Details: FC<Props> = ({ casesData }) => {
  return (
    <Container>
      <PieGraphic variantsData={casesData ? casesData.casesByVariant : []} />
      <Paper>
        <TextTitle>Total de casos registrados</TextTitle>
        {casesData ? (
          <Text>
            {casesData.allCases.casesSequences.toLocaleString('pt-BR')}
          </Text>
        ) : null}
      </Paper>
      <Paper>
        <TextTitle>Total de casos Confirmados</TextTitle>
        {casesData ? (
          <Text>{casesData.allCases.cases.toLocaleString('pt-BR')}</Text>
        ) : null}
      </Paper>
    </Container>
  );
};

export default Details;
