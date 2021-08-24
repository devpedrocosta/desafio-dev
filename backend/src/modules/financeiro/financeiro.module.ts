import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterConfig } from '../../shared/config/multer.config';
import { FinanceiroController } from './controller/financeiro.controller';
import { Financeiro } from './entity/financeiro.entity';
import { FinanceiroService } from './service/financeiro.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Financeiro]),
    MulterModule.registerAsync({
      useClass: MulterConfig,
    }),
  ],
  providers: [FinanceiroService],
  controllers: [FinanceiroController],
})
export class FinanceiroModule {}
