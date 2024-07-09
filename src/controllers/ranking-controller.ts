import { FastifyInstance } from "fastify";
import { db } from "../database/database";

export async function rankingController(app: FastifyInstance){
    app.get('/', async () => {
        const users = await db('users')
            .orderBy('week_score', 'desc')
            .select('*')

        return {users}
    })
}