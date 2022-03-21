import { FC, useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks';
import Home from './Home';

const HomeContainer: FC = () => {
  const { covid } = useStores();
  const [casesData, setCasesData] = useState<Covid.Data>();
  const [rangeDate, setRangeDate] = useState<string[]>([]);
  const [rankCases, setRankCases] = useState<Covid.Rank[]>([]);
  const [loading, setLoading] = useState(true);

  const handleChangeDate = async (
    startDate: string,
    endDate: string,
  ): Promise<void> => {
    try {
      await covid.getCovidCases(startDate, endDate);
      setCasesData(covid.covidData);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getData = useCallback(async () => {
    try {
      await Promise.all([
        covid.getCovidCasesRank(10),
        covid.getCovidRangeDate(),
      ]);
      const lengthDates = covid.covidRangeDate.length - 1;
      await covid.getCovidCases(
        covid.covidRangeDate[lengthDates - 1],
        covid.covidRangeDate[lengthDates],
      );
      setCasesData(covid.covidData);
      setRangeDate(covid.covidRangeDate);
      setRankCases(covid.covidRankCases);
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }, [covid]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Home
      casesData={casesData}
      rangeDate={rangeDate}
      rankCases={rankCases}
      handleChangeDate={handleChangeDate}
    />
  );
};

export default observer(HomeContainer);
