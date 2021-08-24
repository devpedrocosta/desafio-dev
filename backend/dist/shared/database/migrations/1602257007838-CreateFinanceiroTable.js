"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFinanceiroTable1602257007838 = void 0;
const typeorm_1 = require("typeorm");
class CreateFinanceiroTable1602257007838 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'financeiro',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'tipo',
                    type: 'int',
                    isNullable: false,
                }, {
                    name: 'cartao',
                    type: 'varchar',
                    isNullable: false,
                }, {
                    name: 'valor',
                    type: 'varchar',
                    isNullable: false,
                }, {
                    name: 'data',
                    type: 'varchar',
                    isNullable: false,
                }, {
                    name: 'cpf',
                    type: 'varchar',
                    isNullable: false,
                }, {
                    name: 'hora',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'donodaloja',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'nomeloja',
                    type: 'varchar',
                    isNullable: true,
                }
            ],
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateFinanceiroTable1602257007838 = CreateFinanceiroTable1602257007838;
//# sourceMappingURL=1602257007838-CreateFinanceiroTable.js.map