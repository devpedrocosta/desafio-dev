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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
const typeorm_1 = require("typeorm");
let Financeiro = class Financeiro {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Financeiro.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Financeiro.prototype, "tipo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "data", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "valor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "cartao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "hora", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "donodaloja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Financeiro.prototype, "nomeloja", void 0);
Financeiro = __decorate([
    typeorm_1.Entity()
], Financeiro);
exports.Financeiro = Financeiro;
//# sourceMappingURL=financeiro.entity.js.map