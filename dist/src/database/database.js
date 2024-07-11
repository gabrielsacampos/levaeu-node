"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.config = void 0;
require("dotenv/config");
const knex_1 = require("knex");
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
}
exports.config = {
    client: 'sqlite3',
    connection: {
        filename: process.env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations: {
        directory: './db/migrations',
        extension: 'ts'
    }
};
exports.db = (0, knex_1.knex)(exports.config);
