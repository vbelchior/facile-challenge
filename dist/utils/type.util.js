"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeUtil = void 0;
class TypeUtil {
    constructor() { }
    static exists(value) {
        return value !== null && value !== undefined;
    }
    static hasText(value) {
        return TypeUtil.exists(value) && value !== '';
    }
}
exports.TypeUtil = TypeUtil;
//# sourceMappingURL=type.util.js.map