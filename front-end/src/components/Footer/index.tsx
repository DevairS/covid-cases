import { FC } from 'react';
import { Container, Text } from './styles';

const Footer: FC = () => {
  return (
    <Container>
      <Text>
        Todos os dados os disponivel em:{' '}
        <a
          href="https://www.kaggle.com/yamqwe/omicron-covid19-variant-daily-cases"
          target="_blank"
          rel="noreferrer"
        >
          Kaggle
        </a>
      </Text>
    </Container>
  );
};

export default Footer;
