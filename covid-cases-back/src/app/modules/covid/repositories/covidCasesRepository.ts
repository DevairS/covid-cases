import { ICovidCase } from '../interfaces/covidCase.interface';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';
import { CovidFilterProp } from '../interfaces/covidFilterProp.interface';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require('../../../../../assets/db.json');

export class CovidCasesRepository implements ICovidCasesRepository {
  async getByProp(filters: CovidFilterProp): Promise<ICovidCase[]> {
    const filterKeys = Object.keys(filters);
    const dbFilter = db.filter((el) =>
      filterKeys.every((key) => el[key] === filters[key]),
    );

    return dbFilter;
  }
}
