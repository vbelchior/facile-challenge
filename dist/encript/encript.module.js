"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncriptModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const encript_controller_1 = require("./encript.controller");
const encript_model_1 = require("./encript.model");
const encript_service_1 = require("./encript.service");
let EncriptModule = class EncriptModule {
};
EncriptModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([encript_model_1.EncriptModel])],
        controllers: [encript_controller_1.EncriptsController],
        providers: [encript_service_1.EncriptService],
        exports: [],
    })
], EncriptModule);
exports.EncriptModule = EncriptModule;
//# sourceMappingURL=encript.module.js.map