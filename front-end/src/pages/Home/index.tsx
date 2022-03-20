import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const { covid } = useStores();
  const [casesData, setCasesData] = useState<Covid.DataReduce[]>([]);
  const [rangeDate, setRangeDate] = useState<string[]>([]);
  const [rankCases, setRankCases] = useState<Covid.Rank[]>([]);

  const getData = useCallback(async () => {
    await Promise.all([covid.getCovidCasesRank(10), covid.getCovidRangeDate()]);
    setCasesData(covid.covidData);
    setRangeDate(covid.covidRangeDate);
    setRankCases(covid.covidRankCases);
  }, [covid]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Home casesData={casesData} rangeDate={rangeDate} rankCases={rankCases} />
  );
};

export default observer(HomeContainer);
