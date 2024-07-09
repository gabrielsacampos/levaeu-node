import { FastifyInstance } from "fastify"
import {db} from '../database/database'

export async function ratingsController(app: FastifyInstance){
    app.get('/', async () => {
        const ratings = await db('ratings')
            .innerJoin('establishments', 'ratings.id_establishment', 'establishments.id')
            .innerJoin('users', 'ratings.id_user', 'users.id')
            .select('*')
        
            return {ratings}
    })
}
