import { ICovidCaseCalculedCases } from '../../interfaces/covidCaseCalculedCases.interface';

export const compareRank = (
  a: ICovidCaseCalculedCases,
  b: ICovidCaseCalculedCases,
): number => {
  if (a.cases > b.cases) {
    return -1;
  }
  if (a.cases < b.cases) {
    return 1;
  }
  return 0;
};
