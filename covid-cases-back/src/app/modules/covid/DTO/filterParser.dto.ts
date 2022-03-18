import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { isNotEmpty, isNumber, isString } from 'class-validator';
import { enCovidValidProp } from '../enum/covidValidProp.enum';
import { CovidFilterProp } from '../interfaces/covidFilterProp.interface';

type Output = string | number;

export class FilterParser
  implements PipeTransform<Record<string, Output>, CovidFilterProp>
{
  transform(
    value: CovidFilterProp,
    metadata: ArgumentMetadata,
  ): CovidFilterProp {
    const validProps = Object.values(enCovidValidProp);
    const resultKeys = Object.keys(value).filter(
      (el: any) =>
        validProps.includes(el) &&
        (isString(value[el]) || isNumber(value[el])) &&
        isNotEmpty(value[el]),
    );
    return resultKeys.reduce((memo, key) => {
      memo[key] = value[key];
      return memo;
    }, {}) as CovidFilterProp;
  }
}
