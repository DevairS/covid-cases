import { enCovidValidProp } from '../enum/covidValidProp.enum';

type Output = string | number;

export type CovidFilterProp = Record<enCovidValidProp, Output>;
