import { CacheModule, Module } from '@nestjs/common';
import { CovidController } from './covid.controller';
import { CovidDITokens } from './covidDITokens';
import { CovidCasesRepository } from './repositories/covidCasesRepository';
import { FindCovidByPropUseCase } from './useCases/findCovidByProp.usecases';

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
  ],
  controllers: [CovidController],
})
export class CovidModule {}
