import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactTooltip from 'react-tooltip';
import { Navbar, MapChart, TimeLine, BarGraphic } from '~/components';
import Details from './Details';
import { Container, ContainerMain, ContainerMap } from './styles';

type Props = {
  casesData: Covid.DataReduce[];
  rankCases: Covid.Rank[];
  rangeDate: string[];
};

const Home: FC<Props> = ({ casesData, rankCases, rangeDate }) => {
  const [tooltip, setTooltip] = useState<string>('');
  return (
    <Container>
      <Navbar />
      <ContainerMain>
        <TimeLine rangeDate={rangeDate} />
        <ContainerMap>
          <ReactTooltip>{tooltip}</ReactTooltip>
          <MapChart casesData={casesData} setTooltip={setTooltip} />
        </ContainerMap>
        <Details />
        <BarGraphic rankCases={rankCases} />
      </ContainerMain>
    </Container>
  );
};

export default observer(Home);
