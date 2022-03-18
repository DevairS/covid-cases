import { Module } from '@nestjs/common';
import { CovidModule } from './modules/covid/covid.module';

@Module({
  imports: [CovidModule],
})
export class AppModule {}
