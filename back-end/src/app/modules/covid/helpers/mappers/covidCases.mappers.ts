import { ICovidCase } from '../../interfaces/covidCase.interface';
import { ICovidCaseCalculedCases } from '../../interfaces/covidCaseCalculedCases.interface';
import { ICovidCasesMappers } from '../../interfaces/covidCasesMappers.interface';
import { ICovidCaseVariant } from '../../interfaces/covidCaseVariant.interface';
import { compareRank } from '../format/index';

export class CovidCasesMappers implements ICovidCasesMappers {
  mapperByLocationCases(data: ICovidCase[]): ICovidCaseCalculedCases[] {
    const uniquesCountry = Array.from(new Set(data.map((c) => c.location)));
    const mapperData = [...uniquesCountry].map((country) => {
      const filterByCountry = data.filter((row) => row.location === country);
      const cases = filterByCountry
        .map((row) => row.num_sequences)
        .reduce((sum, current) => sum + current);

      const casesSequences = filterByCountry
        .map((row) => row.num_sequences_total)
        .reduce((sum, current) => sum + current);

      return { location: country, cases, casesSequences };
    });
    return mapperData.sort(compareRank);
  }

  mapperByCasesVariant(data: ICovidCase[]): ICovidCaseVariant[] {
    const uniquesVariants = Array.from(new Set(data.map((c) => c.variant)));
    const mapperData = [...uniquesVariants].map((variant) => {
      const filterByVariant = data.filter((row) => row.variant === variant);
      const cases = filterByVariant
        .map((row) => row.num_sequences)
        .reduce((sum, current) => sum + current);
      return { variant, cases };
    });
    return mapperData.sort(compareRank);
  }

  mapperAllCases(data: ICovidCase[]): any {
    let cases = 0;
    let casesSequences = 0;
    data.forEach((el) => {
      cases += el.num_sequences;
      casesSequences += el.num_sequences_total;
    });

    return { cases, casesSequences };
  }
}
