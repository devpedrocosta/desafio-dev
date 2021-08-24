import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { dataLayout } from '../../../shared/util/cnb.layout';
import { Repository } from 'typeorm';
import { Financeiro } from '../entity/financeiro.entity';
const { CnabToJsons } = require('jsons-to-cnab')
const fs = require('fs')
const path = require('path')


@Injectable()
export class FinanceiroService {
  constructor(
    @InjectRepository(Financeiro)
    private repository: Repository<Financeiro>,
  ) { }

  async createFinanceiro(file): Promise<Financeiro[]> {
    try {
      const caminho = path.join(`${file.path}`)
      const data = fs.readFileSync(caminho, 'base64')
      const list = this.convertTojson(data).filter((data => data.tipo)).map((newObject) => this.transformdata(newObject));
      const objectList = this.repository.create(list);
      return await this.repository.save(objectList);
    } catch (error) {
    console.error(error)
    }

  }

  async findAllFinanceiro(): Promise<Financeiro[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      console.error(error)
    }
   
  }

  private transformdata(newObject): Financeiro {
    return { ...newObject, valor: (newObject.valor / 100.00) }
  }
  private convertTojson(dataBase64): Financeiro[] {

    const cnabToJson = new CnabToJsons(dataBase64)

    const definitions = [
      {
        "positions":
          [1, 2, 10, 20, 31, 43, 49, 63],
        "values":
          ["", "", "", "", "", "", "", ""],
        "map": dataLayout
      }
    ]

    cnabToJson.fit(definitions);

    return cnabToJson.convert();
  }
}
