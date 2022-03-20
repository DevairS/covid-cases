import { runInAction, makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { CovidApi } from '~/api';
import { groupDataCases, reduceDataCases } from '~/utils';

class CovidStore {
  covidApi: CovidApi;

  constructor() {
    makeAutoObservable(this);
    this.covidApi = new CovidApi();
  }

  @persist('object')
  covidData: Covid.DataReduce[] = [];

  @persist('object')
  covidRankCases: Covid.Rank[] = [];

  @persist('object')
  covidRangeDate: string[] = [];

  getCovidCases = async (offSet: number, limit: number): Promise<boolean> => {
    const blockData = await this.covidApi.getCasesForDate(offSet, limit);
    const blockDataReduce = reduceDataCases(blockData);

    runInAction(() => {
      this.covidData = groupDataCases(blockDataReduce, this.covidData);
    });
    if (blockData.length < 999) return false;
    return true;
  };

  getCovidCasesRank = async (count: number): Promise<void> => {
    const casesRank = await this.covidApi.getRankCases(count);
    runInAction(() => {
      this.covidRankCases = casesRank;
    });
  };

  getCovidRangeDate = async (): Promise<void> => {
    const rangeDate = await this.covidApi.getRangeDate();
    runInAction(() => {
      this.covidRangeDate = rangeDate;
    });
  };
}

export default CovidStore;
