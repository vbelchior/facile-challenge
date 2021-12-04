"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EncriptService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncriptService = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let EncriptService = EncriptService_1 = class EncriptService {
    encript(text) {
        const cipher = (0, crypto_1.createCipheriv)(EncriptService_1.algorithm, EncriptService_1.randomKey, EncriptService_1.initVector);
        let encryptedData = cipher.update(text, 'utf-8', 'hex');
        encryptedData += cipher.final('hex');
        return (0, rxjs_1.of)(encryptedData);
    }
    decrypt(text) {
        const decipher = (0, crypto_1.createDecipheriv)(EncriptService_1.algorithm, EncriptService_1.randomKey, EncriptService_1.initVector);
        let decryptedData = decipher.update(text, 'hex', 'utf-8');
        decryptedData += decipher.final('utf8');
        return (0, rxjs_1.of)(decryptedData);
    }
};
EncriptService.algorithm = 'aes-256-cbc';
EncriptService.randomKey = (0, crypto_1.randomBytes)(32);
EncriptService.initVector = (0, crypto_1.randomBytes)(16);
EncriptService = EncriptService_1 = __decorate([
    (0, common_1.Injectable)()
], EncriptService);
exports.EncriptService = EncriptService;
//# sourceMappingURL=encript.service.js.map