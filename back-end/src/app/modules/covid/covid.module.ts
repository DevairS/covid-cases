import { CacheModule, Module } from '@nestjs/common';
import { CovidController } from './covid.controller';
import { CovidDITokens } from './covidDITokens';
import { CovidCasesMappers } from './helpers/mappers/covidCases.mappers';
import { CovidCasesRepository } from './repositories/covidCasesRepository';
import { FindCovidByPropUseCase } from './useCases/findCovidByProp.usecases';
import { FindCovidByRangeDate } from './useCases/findCovidByRangeDate.usecase';
import { FindCovidInfos } from './useCases/findCovidInfos.usecase';
import { FindCovidRankCases } from './useCases/findCovidRankCases.usecases';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60,
    }),
  ],
  providers: [
    {
      useClass: CovidCasesRepository,
      provide: CovidDITokens.CovidRepository,
    },
    FindCovidByPropUseCase,
    FindCovidRankCases,
    CovidCasesMappers,
    FindCovidInfos,
    FindCovidByRangeDate,
  ],
  controllers: [CovidController],
})
export class CovidModule {}
