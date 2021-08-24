"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const options = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        path_1.resolve(__dirname, '..', '..', 'modules', '**', 'entity', '*.entity.{ts,js}'),
    ],
    migrations: [path_1.resolve(__dirname, '..', 'database', 'migrations', '*.{ts,js}')],
    cli: {
        migrationsDir: path_1.join('src', 'shared', 'database', 'migrations'),
    },
};
module.exports = options;
//# sourceMappingURL=typeorm.config.js.map