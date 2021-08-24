import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FinanceiroService } from '../service/financeiro.service';

@Controller('api')
export class FinanceiroController {
  constructor(private financeiroService: FinanceiroService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async createFinanceiro(@UploadedFile() file) {
     return await this.financeiroService.createFinanceiro(file);
  }

  @Get()
  async findAllFinanceiro() {
  return this.financeiroService.findAllFinanceiro();
  }
}
