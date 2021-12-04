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
exports.SecretService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const type_util_1 = require("../utils/type.util");
const typeorm_2 = require("typeorm");
const secret_model_1 = require("./secret.model");
let SecretService = class SecretService {
    constructor(secretRepository) {
        this.secretRepository = secretRepository;
    }
    create(entity) {
        return (0, rxjs_1.from)(this.secretRepository.save(new secret_model_1.SecretModel(entity)));
    }
    retrieve(id) {
        return (0, rxjs_1.from)(this.secretRepository.findOne(id));
    }
    filter(nameLike) {
        const query = {};
        if (type_util_1.TypeUtil.exists(nameLike))
            query[secret_model_1.SecretModel.NAME] = { $regex: nameLike, $options: "i" };
        return (0, rxjs_1.from)(this.secretRepository.find({ where: query }));
    }
};
SecretService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(secret_model_1.SecretModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SecretService);
exports.SecretService = SecretService;
//# sourceMappingURL=secret.service.js.map