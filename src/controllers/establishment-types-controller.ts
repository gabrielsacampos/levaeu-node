import { FastifyInstance } from "fastify";
import { db } from "../database/database";

export async function establishmentTypesController(app: FastifyInstance){
    app.get('/', async () => {
        const establishmentTypes = await db('establishment_types').select('*');
        return { establishmentTypes }
    })
}