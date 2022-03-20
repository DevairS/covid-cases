import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { FilterParser } from './DTO/filterParser.dto';
import { CovidFilterProp } from './interfaces/covidFilterProp.interface';
import { FindCovidByPropUseCase } from './useCases/findCovidByProp.usecases';
import { FindCovidRankCases } from './useCases/findCovidRankCases.usecases';
import { FindCovidInfos } from './useCases/findCovidInfos.usecase';
import { FindCovidByRangeDate } from './useCases/findCovidByRangeDate.usecase';

@Controller()
export class CovidController {
  constructor(
    private readonly findCovidCasesByDate: FindCovidByPropUseCase,
    private readonly findCovidRankCases: FindCovidRankCases,
    private readonly findCovidInfos: FindCovidInfos,
    private readonly findCovidByRangeDate: FindCovidByRangeDate,
  ) {}
  @Get()
  @UseInterceptors(CacheInterceptor)
  getByDate(@Query(FilterParser) filters: CovidFilterProp) {
    return this.findCovidCasesByDate.execute(filters);
  }

  @Get('rank/:count')
  @UseInterceptors(CacheInterceptor)
  getRankCases(@Query(FilterParser) filters: CovidFilterProp, @Param() params) {
    return this.findCovidRankCases.execute(filters, params.count);
  }

  @Get('infos')
  @UseInterceptors(CacheInterceptor)
  getInfos() {
    return this.findCovidInfos.execute();
  }

  @Get('rangeDate/:startDate/:endDate')
  @UseInterceptors(CacheInterceptor)
  getAllByRangeDate(@Param() params) {
    const { startDate, endDate } = params;
    console.log(params);
    return this.findCovidByRangeDate.execute(startDate, endDate);
  }
}
