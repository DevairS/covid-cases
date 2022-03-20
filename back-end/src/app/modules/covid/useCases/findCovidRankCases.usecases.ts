import { Inject } from '@nestjs/common';
import { CovidDITokens } from '../covidDITokens';
import { IUseCase } from '../interfaces/useCase.interface';
import { ICovidCaseRank } from '../interfaces/covidCaseRank.interface';
import { CovidFilterProp } from '../interfaces/covidFilterProp.interface';
import { CovidCasesMappers } from '../helpers/mappers/covidCases.mappers';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';

export class FindCovidRankCases
  implements IUseCase<CovidFilterProp, number, ICovidCaseRank[]>
{
  constructor(
    @Inject(CovidDITokens.CovidRepository)
    private covidCasesRepository: ICovidCasesRepository,
    private covidCasesMappers: CovidCasesMappers,
  ) {}

  async execute(
    command: CovidFilterProp,
    count: number,
  ): Promise<ICovidCaseRank[]> {
    const covidCases = await this.covidCasesRepository.getByProp(command);
    const casesRanking = this.covidCasesMappers.mapperByRank(covidCases);
    const casesRankingFilterByCount = casesRanking.slice(0, count);
    return casesRankingFilterByCount;
  }
}
