import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import {  TestUtil } from '../../../../test/util/test.util';
import { Financeiro } from '../entity/financeiro.entity';
import { FinanceiroService } from './financeiro.service';

describe('FinanceiroService', () => {
  let finaceiroService: FinanceiroService;
  let mockFinanceiro: Financeiro;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        FinanceiroService,
        { provide: getRepositoryToken(Financeiro), useValue: mockRepository },
      ],
    }).compile();

    finaceiroService = moduleRef.get<FinanceiroService>(FinanceiroService);
    mockFinanceiro = TestUtil.getMockFinaceiro();
  });

  beforeEach(() => {
    mockRepository.create.mockReset();
    mockRepository.save.mockReset();
    mockRepository.find.mockReset();
  });

  it('should be defined', () => {
    expect(finaceiroService).toBeDefined();
  });

  describe('when create remessa', () => {
    it('should create a remessa', async () => {
      mockRepository.create.mockReturnValue(mockFinanceiro);
      mockRepository.save.mockReturnValue(mockFinanceiro);

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

      const savedRemessa = await finaceiroService.createFinanceiro(remessa);

      expect(savedRemessa).toHaveProperty('id',1);
      expect(savedRemessa).toMatchObject(mockFinanceiro);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('when search all remessas', () => {
    it('should find all remessas', async () => {
      mockRepository.find.mockReturnValue([mockFinanceiro,mockFinanceiro]);
      const remessas = await finaceiroService.findAllFinanceiro();
      expect(remessas).toHaveLength(2);
      expect(remessas).toStrictEqual([mockFinanceiro,mockFinanceiro]);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });
});
