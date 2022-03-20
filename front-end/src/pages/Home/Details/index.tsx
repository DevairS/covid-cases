import React from 'react';
import { PieGraphic } from '~/components';
import { Container, Paper } from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <PieGraphic />
      <Paper>Total de casos registrados</Paper>;
      <Paper>Total de casos registrados2</Paper>;
    </Container>
  );
};

export default Details;
