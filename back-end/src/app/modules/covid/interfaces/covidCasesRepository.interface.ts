import { ICovidCase } from './covidCase.interface';

export interface ICovidCasesRepository {
  getByProp(command): Promise<ICovidCase[]>;

  getInfos(): Promise<string[]>;
}
