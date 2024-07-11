"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.establishmentTypesController = establishmentTypesController;
const database_1 = require("../database/database");
async function establishmentTypesController(app) {
    app.get('/', async () => {
        const establishmentTypes = await (0, database_1.db)('establishment_types').select('*');
        return { establishmentTypes };
    });
}
