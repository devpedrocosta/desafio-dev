import { Test } from '@nestjs/testing';
import { TestUtil } from '../../../../test/util/test.util';
import { Financeiro } from '../entity/financeiro.entity';
import { FinanceiroService } from '../service/financeiro.service';

import { FinanceiroController } from './financeiro.controller';


describe('FinanceiroController', () => {
  let financeiroController: FinanceiroController;
  let mockFinanceiro: Financeiro;

  const mockFinanceiroService = {
    createFinanceiro: jest.fn(),
    findAllFinanceiro: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FinanceiroController],
      providers: [{ provide: FinanceiroService, useValue: mockFinanceiroService }],
    }).compile();

    financeiroController = moduleRef.get<FinanceiroController>(FinanceiroController);
    mockFinanceiro = TestUtil.getMockFinaceiro();
  });

  beforeEach(() => {
    mockFinanceiroService.createFinanceiro.mockReset();
    mockFinanceiroService.findAllFinanceiro.mockReset();
  });

  it('should be defined', () => {
    expect(financeiroController).toBeDefined();
  });

  describe('when create post', () => {
    it('should create a post and return it', async () => {
      mockFinanceiroService.createFinanceiro.mockReturnValue(mockFinanceiro);
      const remessa =   {
        fieldname: 'file',
        originalname: 'CNAB.txt',
        encoding: '7bit',
        mimetype: 'text/plain',
        destination: 'dist/uploads',
        filename: 'f63d4de9c4eae7767c62ac8eae9a3a98',
        path: 'dist/uploads/f63d4de9c4eae7767c62ac8eae9a3a98',
        size: 1723
      }


      const createdPost = await financeiroController.createFinanceiro(
        remessa
      );

      expect(createdPost).toHaveProperty('id', 1);
      expect(createdPost).toMatchObject(mockFinanceiro);
      expect(mockFinanceiroService.createFinanceiro).toBeCalledWith(remessa);
      expect(mockFinanceiroService.createFinanceiro).toBeCalledTimes(1);
    });
  });

  describe('when search all remessas', () => {
    it('should find all remessas and return them', async () => {
      mockFinanceiroService.findAllFinanceiro.mockReturnValue([mockFinanceiro, mockFinanceiro]);

      const remessas = await financeiroController.findAllFinanceiro();

      expect(remessas).toHaveLength(2);
      expect(remessas).toStrictEqual([mockFinanceiro, mockFinanceiro]);
      expect(mockFinanceiroService.findAllFinanceiro).toBeCalledTimes(1);
    });
  });
});
