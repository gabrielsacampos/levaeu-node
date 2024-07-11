"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = usersController;
const database_1 = require("../database/database");
const zod_1 = require("zod");
async function usersController(app) {
    app.get('/', async () => {
        const users = await (0, database_1.db)('users').select('*');
        return { users };
    });
    app.get('/:id', async (request, reply) => {
        const getUserSchema = zod_1.z.object({
            id: zod_1.z.string()
        });
        const { id } = getUserSchema.parse(request.params);
        const user = await (0, database_1.db)('users').where({ id }).select('*').first();
        return user;
    });
}
