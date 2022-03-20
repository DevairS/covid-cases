import { ICovidCaseCalculedCases } from '../../interfaces/covidCaseCalculedCases.interface';
import { ICovidCaseVariant } from '../../interfaces/covidCaseVariant.interface';

export const compareRank = (
  a: ICovidCaseCalculedCases | ICovidCaseVariant,
  b: ICovidCaseCalculedCases | ICovidCaseVariant,
): number => {
  if (a.cases > b.cases) {
    return -1;
  }
  if (a.cases < b.cases) {
    return 1;
  }
  return 0;
};
