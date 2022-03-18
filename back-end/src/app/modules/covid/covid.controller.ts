import {
  CacheInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { FilterParser } from './DTO/filterParser.dto';
import { CovidFilterProp } from './interfaces/covidFilterProp.interface';
import { FindCovidByPropUseCase } from './useCases/findCovidByProp.usecases';

@Controller()
export class CovidController {
  constructor(private readonly findCovidCasesByDate: FindCovidByPropUseCase) {}
  @Get()
  @UseInterceptors(CacheInterceptor)
  getByDate(@Query(FilterParser) filters: CovidFilterProp) {
    console.log(filters);
    return this.findCovidCasesByDate.execute(filters);
  }
}
