import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactTooltip from 'react-tooltip';
import { Navbar, MapChart, TimeLine, BarGraphic } from '~/components';
import Details from './Details';
import { Container, ContainerMain, ContainerMap } from './styles';

type Props = {
  casesData: Covid.Data;
  rankCases: Covid.Rank[];
  rangeDate: string[];
  handleChangeDate(startDate: string, endDate: string): void;
};

const Home: FC<Props> = ({
  casesData,
  rankCases,
  rangeDate,
  handleChangeDate,
}) => {
  const [tooltip, setTooltip] = useState<string>('');
  return (
    <Container>
      <Navbar />
      <ContainerMain>
        <TimeLine rangeDate={rangeDate} handleChangeDate={handleChangeDate} />
        <ContainerMap>
          <ReactTooltip>{tooltip}</ReactTooltip>
          <MapChart
            casesData={casesData.casesByCountry}
            setTooltip={setTooltip}
          />
        </ContainerMap>
        <Details casesData={casesData} />
        <BarGraphic rankCases={rankCases} />
      </ContainerMain>
    </Container>
  );
};

export default observer(Home);
