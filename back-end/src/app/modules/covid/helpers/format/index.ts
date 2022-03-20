import { ICovidCaseRank } from '../../interfaces/covidCaseRank.interface';

export const compareRank = (a: ICovidCaseRank, b: ICovidCaseRank): number => {
  if (a.cases > b.cases) {
    return -1;
  }
  if (a.cases < b.cases) {
    return 1;
  }
  return 0;
};
