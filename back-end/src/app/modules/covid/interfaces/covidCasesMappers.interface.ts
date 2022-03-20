import { ICovidCase } from './covidCase.interface';
import { ICovidCaseCalculedCases } from './covidCaseCalculedCases.interface';

export interface ICovidCasesMappers {
  mapperByLocationCases(data: ICovidCase[]): ICovidCaseCalculedCases[];
}
