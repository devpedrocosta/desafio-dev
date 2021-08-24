"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceiroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cnb_layout_1 = require("../../../shared/util/cnb.layout");
const typeorm_2 = require("typeorm");
const financeiro_entity_1 = require("../entity/financeiro.entity");
const { CnabToJsons } = require('jsons-to-cnab');
const fs = require('fs');
const path = require('path');
let FinanceiroService = class FinanceiroService {
    constructor(repository) {
        this.repository = repository;
    }
    async createFinanceiro(file) {
        try {
            const caminho = path.join(`${file.path}`);
            const data = fs.readFileSync(caminho, 'base64');
            const list = this.convertTojson(data).filter((data => data.tipo)).map((newObject) => this.transformdata(newObject));
            const objectList = this.repository.create(list);
            return await this.repository.save(objectList);
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAllFinanceiro() {
        try {
            return await this.repository.find();
        }
        catch (error) {
            console.error(error);
        }
    }
    transformdata(newObject) {
        return Object.assign(Object.assign({}, newObject), { valor: (newObject.valor / 100.00) });
    }
    convertTojson(dataBase64) {
        const cnabToJson = new CnabToJsons(dataBase64);
        const definitions = [
            {
                "positions": [1, 2, 10, 20, 31, 43, 49, 63],
                "values": ["", "", "", "", "", "", "", ""],
                "map": cnb_layout_1.dataLayout
            }
        ];
        cnabToJson.fit(definitions);
        return cnabToJson.convert();
    }
};
FinanceiroService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(financeiro_entity_1.Financeiro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FinanceiroService);
exports.FinanceiroService = FinanceiroService;
//# sourceMappingURL=financeiro.service.js.map