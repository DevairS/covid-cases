import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactTooltip from 'react-tooltip';
import { Navbar, MapChart, TimeLine } from '~/components';
import { Container, ContainerMain, ContainerMap } from './styles';

type Props = {
  casesData: Covid.DataReduce[];
};

const Home: FC<Props> = ({ casesData }) => {
  const [tooltip, setTooltip] = useState<string>('');
  return (
    <Container>
      <Navbar />
      <ContainerMain>
        <TimeLine />
        <ContainerMap>
          <MapChart casesData={casesData} setTooltip={setTooltip} />
          <ReactTooltip>{tooltip}</ReactTooltip>
        </ContainerMap>
      </ContainerMain>
    </Container>
  );
};

export default observer(Home);
