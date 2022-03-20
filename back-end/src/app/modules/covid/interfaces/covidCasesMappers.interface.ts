import { ICovidCase } from './covidCase.interface';
import { ICovidCaseRank } from './covidCaseRank.interface';

export interface ICovidCasesMappers {
  mapperByRank(data: ICovidCase[]): ICovidCaseRank[];
}
