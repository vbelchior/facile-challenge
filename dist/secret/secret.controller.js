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
exports.SecretController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const type_util_1 = require("../utils/type.util");
const encript_service_1 = require("./encript.service");
const secret_model_1 = require("./secret.model");
const secret_service_1 = require("./secret.service");
let SecretController = class SecretController {
    constructor(encriptService, secretService) {
        this.encriptService = encriptService;
        this.secretService = secretService;
    }
    async create(secret) {
        try {
            if (!type_util_1.TypeUtil.hasText(secret.name))
                throw console.error();
            const encriptedData = await (0, rxjs_1.firstValueFrom)(this.encriptService.encript(secret.name));
            secret.name = encriptedData;
            return (0, rxjs_1.firstValueFrom)(this.secretService.create(secret));
        }
        catch (err) {
            throw new common_1.HttpException('O campo "name" é obrigatório', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async retrieve(id) {
        try {
            const secret = await (0, rxjs_1.firstValueFrom)(this.secretService.retrieve(id));
            if (!type_util_1.TypeUtil.exists(secret))
                throw console.error();
            const decriptedData = await (0, rxjs_1.firstValueFrom)(this.encriptService.decrypt(secret.name));
            delete secret.id;
            secret.name = decriptedData;
            return (0, rxjs_1.firstValueFrom)((0, rxjs_1.of)(secret));
        }
        catch (err) {
            throw new common_1.HttpException('O campo "name" é obrigatório', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    filter(name) {
        return (0, rxjs_1.firstValueFrom)(this.secretService.filter(name));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [secret_model_1.SecretModel]),
    __metadata("design:returntype", Promise)
], SecretController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SecretController.prototype, "retrieve", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecretController.prototype, "filter", null);
SecretController = __decorate([
    (0, common_1.Controller)('secrets'),
    __metadata("design:paramtypes", [encript_service_1.EncriptService,
        secret_service_1.SecretService])
], SecretController);
exports.SecretController = SecretController;
//# sourceMappingURL=secret.controller.js.map