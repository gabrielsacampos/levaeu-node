"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.establishmentsController = establishmentsController;
const database_1 = require("../database/database");
const zod_1 = require("zod");
const crypto_1 = require("crypto");
async function establishmentsController(app) {
    app.get('/topcards', async () => {
        const establishments = await database_1.db.raw(`
      SELECT 
        e.*, 
        ei.*, 
        AVG(r.stars) AS average_rating,
        u.name AS sponsor_name,
        u.image_url AS sponsor_image
      FROM establishments AS e
      INNER JOIN users AS u ON e.id_sponsor = u.id
      INNER JOIN establishment_images AS ei ON e.id = ei.id_establishment
      INNER JOIN ratings AS r ON e.id = r.id_establishment
      WHERE ei.cover = true AND e.tag != 'none'
      GROUP BY e.id
    `);
        return { establishments };
    });
    app.get('/', async () => {
        const establishments = await (0, database_1.db)('establishments').select('*');
        return { establishments };
    });
    app.get('/:id', async (request, reply) => {
        const getEstablishmentSchema = zod_1.z.object({
            id: zod_1.z.string()
        });
        const { id } = getEstablishmentSchema.parse(request.params);
        const establishment = await (0, database_1.db)('establishments').where({ id }).select('*').first();
        establishment;
        return establishment;
    });
    app.post('/', async (request, reply) => {
        try {
            const createEstablishmentSchema = zod_1.z.object({
                name: zod_1.z.string(),
                cep: zod_1.z.string(),
                city: zod_1.z.string(),
                state: zod_1.z.string(),
                address: zod_1.z.string(),
                description: zod_1.z.string(),
                id_sponsor: zod_1.z.string(),
                establishment_type_id: zod_1.z.string()
            });
            console.log(request.body);
            const { name, address, description, id_sponsor, city, state, cep, establishment_type_id } = createEstablishmentSchema.parse(request.body);
            const fullAddress = `${address}, ${city}, ${state}, ${cep}`;
            await (0, database_1.db)('establishments').insert({
                id: (0, crypto_1.randomUUID)(),
                name,
                tag: 'none',
                address: fullAddress,
                description,
                id_sponsor,
                id_type: establishment_type_id,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            });
            return reply.status(201).send({ message: 'Establishment created' });
        }
        catch (err) {
            return reply.status(500).send({ message: "Internal server error" });
        }
    });
}
