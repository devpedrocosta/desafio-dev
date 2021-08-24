import { FinanceiroService } from '../service/financeiro.service';
export declare class FinanceiroController {
    private financeiroService;
    constructor(financeiroService: FinanceiroService);
    createFinanceiro(file: any): Promise<import("../entity/financeiro.entity").Financeiro[]>;
    findAllFinanceiro(): Promise<import("../entity/financeiro.entity").Financeiro[]>;
}
