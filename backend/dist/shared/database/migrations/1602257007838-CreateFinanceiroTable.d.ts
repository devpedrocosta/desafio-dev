import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateFinanceiroTable1602257007838 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
