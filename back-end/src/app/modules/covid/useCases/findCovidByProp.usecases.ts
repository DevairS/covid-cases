import { Inject } from '@nestjs/common';
import { CovidDITokens } from '../covidDITokens';
import { ICovidCase } from '../interfaces/covidCase.interface';
import { ICovidCasesRepository } from '../interfaces/covidCasesRepository.interface';
import { CovidFilterProp } from '../interfaces/covidFilterProp.interface';
import { IUseCase } from '../interfaces/useCase.interface';

export class FindCovidByPropUseCase
  implements IUseCase<CovidFilterProp, any, ICovidCase[]>
{
  constructor(
    @Inject(CovidDITokens.CovidRepository)
    private covidCasesRepository: ICovidCasesRepository,
  ) {}

  async execute(command: CovidFilterProp): Promise<ICovidCase[]> {
    const covidCases = await this.covidCasesRepository.getByProp(command);
    //tratamentos aqui;
    return covidCases;
  }
}
