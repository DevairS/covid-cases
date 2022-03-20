import { ICovidCase } from '../../interfaces/covidCase.interface';
import { ICovidCaseRank } from '../../interfaces/covidCaseRank.interface';
import { ICovidCasesMappers } from '../../interfaces/covidCasesMappers.interface';
import { compareRank } from '../format/index';

export class CovidCasesMappers implements ICovidCasesMappers {
  mapperByRank(data: ICovidCase[]): ICovidCaseRank[] {
    const uniquesCountry = Array.from(new Set(data.map((c) => c.location)));
    const mapperData = [...uniquesCountry].map((country) => {
      const filterByCountry = data.filter((row) => row.location === country);
      const cases = filterByCountry
        .map((row) => row.num_sequences)
        .reduce((sum, current) => sum + current);
      return { location: country, cases };
    });
    return mapperData.sort(compareRank);
  }
}
