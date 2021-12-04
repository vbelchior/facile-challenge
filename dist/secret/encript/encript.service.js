"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HashService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashService = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
let HashService = HashService_1 = class HashService {
    async encript(text) {
        const cipher = (0, crypto_1.createCipheriv)(HashService_1.algorithm, 'key', HashService_1.iv);
        const encryptedText = Buffer.concat([cipher.update(text), cipher.final()]);
        return;
    }
};
HashService.iv = (0, crypto_1.randomBytes)(16);
HashService.password = 'Chuleta@123';
HashService.algorithm = 'aes-256-ctr';
HashService = HashService_1 = __decorate([
    (0, common_1.Injectable)()
], HashService);
exports.HashService = HashService;
//# sourceMappingURL=encript.service.js.map