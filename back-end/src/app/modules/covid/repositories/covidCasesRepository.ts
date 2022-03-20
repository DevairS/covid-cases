import { ICovidCase } from '../interfaces/covidCase.interface';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';
import { CovidFilterProp } from '../interfaces/covidFilterProp.interface';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../../../../assets/db.json');

export class CovidCasesRepository implements ICovidCasesRepository {
  async getByProp(filters?: CovidFilterProp): Promise<ICovidCase[]> {
    const filterKeys = Object.keys(filters);
    const dbFilter = db.filter((el) =>
      filterKeys.every((key) => el[key] === filters[key]),
    );

    return dbFilter;
  }

  async getInfos(): Promise<string[]> {
    const dateVerifiedCases: string[] = db.map((el: ICovidCase) => el.date);
    const uniqueDate = Array.from(new Set(dateVerifiedCases));
    return uniqueDate.sort();
  }

  async getByDate(startDate: string, endDate: string): Promise<ICovidCase[]> {
    const filterArray = db.filter(
      (el) => el.date >= startDate && el.date <= endDate,
    );

    return filterArray;
  }
}
