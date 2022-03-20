import { Inject } from '@nestjs/common';
import { CovidDITokens } from '../covidDITokens';
import { IUseCase } from '../interfaces/useCase.interface';
import { ICovidCaseCalculedCases } from '../interfaces/covidCaseCalculedCases.interface';
import { CovidFilterProp } from '../interfaces/covidFilterProp.interface';
import { CovidCasesMappers } from '../helpers/mappers/covidCases.mappers';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';

export class FindCovidRankCases
  implements IUseCase<CovidFilterProp, number, ICovidCaseCalculedCases[]>
{
  constructor(
    @Inject(CovidDITokens.CovidRepository)
    private covidCasesRepository: ICovidCasesRepository,
    private covidCasesMappers: CovidCasesMappers,
  ) {}

  async execute(
    command: CovidFilterProp,
    count: number,
  ): Promise<ICovidCaseCalculedCases[]> {
    const covidCases = await this.covidCasesRepository.getByProp(command);
    const casesRanking =
      this.covidCasesMappers.mapperByLocationCases(covidCases);
    const casesRankingFilterByCount = casesRanking.slice(0, count);
    return casesRankingFilterByCount;
  }
}
