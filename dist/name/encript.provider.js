"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encriptProviders = void 0;
const typeorm_1 = require("typeorm");
exports.encriptProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=encript.provider.js.map