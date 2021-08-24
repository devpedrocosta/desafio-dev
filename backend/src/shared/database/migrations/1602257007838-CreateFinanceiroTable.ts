import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFinanceiroTable1602257007838 implements MigrationInterface {
  private table = new Table({
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
      },     {
        name: 'cartao',
        type: 'varchar',
        isNullable: false,
      },    {
        name: 'valor',
        type: 'varchar',
        isNullable: false,
      },   {
        name: 'data',
        type: 'varchar',
        isNullable: false,
      }, {
        name: 'cpf',
        type: 'varchar',
        isNullable: false,
      },  {
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

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
