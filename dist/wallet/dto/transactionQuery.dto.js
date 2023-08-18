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
exports.QueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class QueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "date filter: boshlanish sana format - (DD-MM-YYYY)",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QueryDto.prototype, "dateStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "date filter: tugash sana format - (DD-MM-YYYY)",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QueryDto.prototype, "dateEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: "karigoriya turi, INCOME, EXPENSE - (kirim, chiqim)",
        required: false
    }),
    __metadata("design:type", String)
], QueryDto.prototype, "transactionType", void 0);
exports.QueryDto = QueryDto;
//# sourceMappingURL=transactionQuery.dto.js.map