"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encriptProviders = void 0;
const encript_model_1 = require("./encript.model");
exports.encriptProviders = [
    {
        provide: 'ENCRIPT_REPOSITORY',
        useFactory: (connection) => connection.getRepository(encript_model_1.EncriptModel),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=encript.provider.js.map