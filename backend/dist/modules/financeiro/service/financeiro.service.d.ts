import { Repository } from 'typeorm';
import { Financeiro } from '../entity/financeiro.entity';
export declare class FinanceiroService {
    private repository;
    constructor(repository: Repository<Financeiro>);
    createFinanceiro(file: any): Promise<Financeiro[]>;
    findAllFinanceiro(): Promise<Financeiro[]>;
    private transformdata;
    private convertTojson;
}
