import { ICovidCaseCalculedCases } from './covidCaseCalculedCases.interface';
import { ICovidCaseVariant } from './covidCaseVariant.interface';

export class ICovidCaseVariantLocation {
  casesByCountry: ICovidCaseCalculedCases[];
  casesByVariant: ICovidCaseVariant[];
}
