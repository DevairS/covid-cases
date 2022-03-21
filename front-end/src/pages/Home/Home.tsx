import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactTooltip from 'react-tooltip';
import { Navbar, MapChart, TimeLine, BarGraphic, Footer } from '~/components';
import Details from './Details';
import { Container, ContainerMain, ContainerMap, Skeleton } from './styles';

type Props = {
  rangeDate: string[];
  casesData: Covid.Data;
  rankCases: Covid.Rank[];
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
          {casesData ? (
            <>
              <ReactTooltip>{tooltip}</ReactTooltip>
              <MapChart
                casesData={casesData.casesByCountry}
                setTooltip={setTooltip}
              />
            </>
          ) : (
            <Skeleton />
          )}
        </ContainerMap>
        <Details casesData={casesData} />
        <BarGraphic rankCases={rankCases} />
      </ContainerMain>
      <Footer />
    </Container>
  );
};

export default observer(Home);
