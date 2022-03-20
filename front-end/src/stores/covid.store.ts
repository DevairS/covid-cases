import { runInAction, makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { CovidApi } from '~/api';

class CovidStore {
  covidApi: CovidApi;

  constructor() {
    makeAutoObservable(this);
    this.covidApi = new CovidApi();
  }

  @persist('object')
  covidData: Covid.Data = null;

  @persist('object')
  covidRankCases: Covid.Rank[] = [];

  @persist('object')
  covidRangeDate: string[] = [];

  getCovidCases = async (startDate: string, endDate: string): Promise<void> => {
    const data = await this.covidApi.getCasesVariantsByRangeDate(
      startDate,
      endDate,
    );
    runInAction(() => {
      this.covidData = data;
    });
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
