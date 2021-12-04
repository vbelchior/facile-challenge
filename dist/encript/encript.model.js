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
exports.EncriptModel = void 0;
const typeorm_1 = require("typeorm");
let EncriptModel = class EncriptModel {
    constructor(json) {
        if (json != undefined && json != null) {
            const keys = Object.keys(json);
            if (keys.includes('id'))
                this.id = json.id ? String(json.id) : json.id;
            if (keys.includes('name'))
                this.name = json.name ? String(json.name) : json.name;
        }
    }
};
EncriptModel.ID = 'id';
EncriptModel.NAME = 'name';
__decorate([
    (0, typeorm_1.PrimaryColumn)('integer'),
    __metadata("design:type", Number)
], EncriptModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 300 }),
    __metadata("design:type", String)
], EncriptModel.prototype, "name", void 0);
EncriptModel = __decorate([
    (0, typeorm_1.Entity)('encripts'),
    __metadata("design:paramtypes", [Object])
], EncriptModel);
exports.EncriptModel = EncriptModel;
//# sourceMappingURL=encript.model.js.map