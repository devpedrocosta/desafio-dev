import { Financeiro } from "../../src/modules/financeiro/entity/financeiro.entity";

export class TestUtil {
  static getMockFinaceiro(): Financeiro {
    const remessa = new Financeiro();
    remessa.id = 1;
    remessa.tipo = 3;
    remessa.data = '978798';
    remessa.valor = '120';
    remessa.cpf = '3489437493878'
    remessa.cartao = '3489437493878'
    remessa.hora = '3489437493878'
    remessa.donodaloja = 'pedro test'
    remessa.nomeloja = 'pedro test'

    return remessa;
  }
}


export const mockdataRemessa = [
  {
      "tipo": 3,
      "data": 20190301,
      "valor": 142,
      "cpf": 9620676017,
      "cartao": 4753,
      "hora": 153453,
      "donodaloja": "JOÃO MACEDO",
      "nomeloja": "BAR DO JOÃO",
      "id": 43
  },
  {
      "tipo": 5,
      "data": 20190301,
      "valor": 132,
      "cpf": 55641815063,
      "cartao": 3123,
      "hora": 145607,
      "donodaloja": "MARIA JOSEFINA",
      "nomeloja": "LOJA DO Ó - MATRIZ",
      "id": 44
  },
  {
      "tipo": 3,
      "data": 20190301,
      "valor": 122,
      "cpf": 84515254073,
      "cartao": 6777,
      "hora": 172712,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 45
  },
  {
      "tipo": 2,
      "data": 20190301,
      "valor": 112,
      "cpf": 9620676017,
      "cartao": 3648,
      "hora": 234234,
      "donodaloja": "JOÃO MACEDO",
      "nomeloja": "BAR DO JOÃO",
      "id": 46
  },
  {
      "tipo": 1,
      "data": 20190301,
      "valor": 152,
      "cpf": 9620676017,
      "cartao": 1234,
      "hora": 233000,
      "donodaloja": "JOÃO MACEDO",
      "nomeloja": "BAR DO JOÃO",
      "id": 47
  },
  {
      "tipo": 2,
      "data": 20190301,
      "valor": 107,
      "cpf": 84515254073,
      "cartao": 8723,
      "hora": 123333,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 48
  },
  {
      "tipo": 2,
      "data": 20190301,
      "valor": 502,
      "cpf": 84515254073,
      "cartao": 8473,
      "hora": 231233,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 49
  },
  {
      "tipo": 3,
      "data": 20190301,
      "valor": 602,
      "cpf": 23270298056,
      "cartao": 6777,
      "hora": 172712,
      "donodaloja": "JOSÉ COSTA",
      "nomeloja": "MERCEARIA 3 IRMÃOS",
      "id": 50
  },
  {
      "tipo": 1,
      "data": 20190301,
      "valor": 200,
      "cpf": 55641815063,
      "cartao": 1234,
      "hora": 90002,
      "donodaloja": "MARIA JOSEFINA",
      "nomeloja": "LOJA DO Ó - MATRIZ",
      "id": 51
  },
  {
      "tipo": 5,
      "data": 20190301,
      "valor": 802,
      "cpf": 84515254073,
      "cartao": 3123,
      "hora": 145607,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 52
  },
  {
      "tipo": 2,
      "data": 20190301,
      "valor": 102,
      "cpf": 23270298056,
      "cartao": 8473,
      "hora": 231233,
      "donodaloja": "JOSÉ COSTA",
      "nomeloja": "MERCEARIA 3 IRMÃOS",
      "id": 53
  },
  {
      "tipo": 3,
      "data": 20190301,
      "valor": 6102,
      "cpf": 23270298056,
      "cartao": 6777,
      "hora": 172712,
      "donodaloja": "JOSÉ COSTA",
      "nomeloja": "MERCEARIA 3 IRMÃOS",
      "id": 54
  },
  {
      "tipo": 4,
      "data": 20190301,
      "valor": 152.32,
      "cpf": 55641815063,
      "cartao": 1234,
      "hora": 100000,
      "donodaloja": "MARIA JOSEFINA",
      "nomeloja": "LOJA DO Ó - FILIAL",
      "id": 55
  },
  {
      "tipo": 8,
      "data": 20190301,
      "valor": 102.03,
      "cpf": 84515254073,
      "cartao": 2344,
      "hora": 123222,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 56
  },
  {
      "tipo": 3,
      "data": 20190301,
      "valor": 103,
      "cpf": 23270298056,
      "cartao": 6777,
      "hora": 172712,
      "donodaloja": "JOSÉ COSTA",
      "nomeloja": "MERCEARIA 3 IRMÃOS",
      "id": 57
  },
  {
      "tipo": 9,
      "data": 20190301,
      "valor": 102,
      "cpf": 55641815063,
      "cartao": 6228,
      "hora": 0,
      "donodaloja": "MARIA JOSEFINA",
      "nomeloja": "LOJA DO Ó - MATRIZ",
      "id": 58
  },
  {
      "tipo": 4,
      "data": 20190601,
      "valor": 506.17,
      "cpf": 84515254073,
      "cartao": 1234,
      "hora": 100000,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 59
  },
  {
      "tipo": 2,
      "data": 20190301,
      "valor": 109,
      "cpf": 23270298056,
      "cartao": 8723,
      "hora": 123333,
      "donodaloja": "JOSÉ COSTA",
      "nomeloja": "MERCEARIA 3 IRMÃOS",
      "id": 60
  },
  {
      "tipo": 8,
      "data": 20190301,
      "valor": 2,
      "cpf": 84515254073,
      "cartao": 2344,
      "hora": 123222,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 61
  },
  {
      "tipo": 2,
      "data": 20190301,
      "valor": 5,
      "cpf": 23270298056,
      "cartao": 7677,
      "hora": 141808,
      "donodaloja": "JOSÉ COSTA",
      "nomeloja": "MERCEARIA 3 IRMÃOS",
      "id": 62
  },
  {
      "tipo": 3,
      "data": 20190301,
      "valor": 192,
      "cpf": 84515254073,
      "cartao": 6777,
      "hora": 172712,
      "donodaloja": "MARCOS PEREIRA",
      "nomeloja": "MERCADO DA AVENIDA",
      "id": 63
  }
]