import { Inject } from '@nestjs/common';
import { CovidDITokens } from '../covidDITokens';
import { IUseCase } from '../interfaces/useCase.interface';
import { CovidCasesMappers } from '../helpers/mappers/covidCases.mappers';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';

export class FindCovidInfos implements IUseCase {
  constructor(
    @Inject(CovidDITokens.CovidRepository)
    private covidCasesRepository: ICovidCasesRepository,
    private covidCasesMappers: CovidCasesMappers,
  ) {}

  async execute(): Promise<any> {
    const covidCases = await this.covidCasesRepository.getInfos();

    return covidCases;
  }
}
