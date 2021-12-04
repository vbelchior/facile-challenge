"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const rxjs_1 = require("rxjs");
const crypto_2 = require("crypto");
const algorithm = 'aes-256-ctr';
const randomKey = crypto_2.default.randomBytes(32);
const initVector = crypto_2.default.randomBytes(16);
function encrypt(text) {
    const cipher = (0, crypto_1.createCipheriv)(algorithm, randomKey, initVector);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    const encryptedText = encrypted.toString('hex');
    console.debug(encrypted.toString('hex'));
    return (0, rxjs_1.of)(encryptedText);
}
function decrypt(text) {
    const decipher = crypto_2.default.createDecipheriv(algorithm, randomKey, initVector);
    let decrypted = decipher.update(text, 'hex', 'utf-8');
    decrypted += decipher.final('utf8');
    return (0, rxjs_1.of)(decrypted);
}
//# sourceMappingURL=encrypt.js.map