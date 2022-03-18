import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks';
import Home from './Home';

const BLOCK_SIZE = 999;

const HomeContainer: FC = () => {
  const { app, covid } = useStores();
  const [casesData, setCasesData] = useState<Covid.DataReduce[]>([]);

  const fetchDate = useCallback(async (): Promise<void> => {
    let offSet = 0;
    let status = true;
    while (status) {
      // eslint-disable-next-line no-await-in-loop
      status = await covid.getCovidCases(offSet, offSet + BLOCK_SIZE);
      offSet += BLOCK_SIZE + 1;
      if (!status) {
        return;
      }
    }
  }, [covid]);

  const updateGeolocation = useCallback(async () => {
    await app.setGeolocation();
    await fetchDate();
    setCasesData(covid.covidData);
  }, [app, covid.covidData, fetchDate]);

  useEffect(() => {
    updateGeolocation();
  }, [app, updateGeolocation]);

  return <Home casesData={casesData} />;
};

export default observer(HomeContainer);
