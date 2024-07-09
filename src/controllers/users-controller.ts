import { FastifyInstance } from "fastify"
import { db } from "../database/database"
import {z} from 'zod'

export async function usersController(app: FastifyInstance){
    app.get('/', async () => {
        const users = await db('users').select('*')
        return {users}
    })

    app.get('/:id', async (request, reply) => {
        const getUserSchema = z.object({
            id: z.string()
        })

        
        const {id} = getUserSchema.parse(request.params)

        const user = await db('users').where({id}).select('*').first()
        return user
    })
}