import { Inject } from '@nestjs/common';
import { CovidDITokens } from '../covidDITokens';
import { CovidCasesMappers } from '../helpers/mappers/covidCases.mappers';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';
import { ICovidCaseVariantLocation } from '../interfaces/covidCaseVariantLocation.interface';
import { IUseCase } from '../interfaces/useCase.interface';

export class FindCovidByRangeDate
  implements IUseCase<any, any, ICovidCaseVariantLocation>
{
  constructor(
    @Inject(CovidDITokens.CovidRepository)
    private covidCasesRepository: ICovidCasesRepository,
    private covidCasesMappers: CovidCasesMappers,
  ) {}

  async execute(
    startDate: string,
    endDate: string,
  ): Promise<ICovidCaseVariantLocation> {
    const covidCases = await this.covidCasesRepository.getByDate(
      startDate,
      endDate,
    );
    const casesByCountry =
      this.covidCasesMappers.mapperByLocationCases(covidCases);

    const casesByVariant =
      this.covidCasesMappers.mapperByCasesVariant(covidCases);
    return { casesByCountry, casesByVariant };
  }
}
