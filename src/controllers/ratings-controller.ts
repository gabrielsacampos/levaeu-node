import { FastifyInstance } from "fastify"
import {db} from '../database/database'
import * as zod from 'zod'
import { randomUUID } from "crypto"

export async function ratingsController(app: FastifyInstance){
    app.get('/', async () => {
        const ratings = await db.raw(`
               SELECT 
                    u.name AS user_name,
                    u.image_url AS user_image_url,
                    uc.name AS user_category,
                    r.review AS review, 
                    r.updated_at AS date,
                    r.stars AS stars,
                    e.name as establishment_name,
                    ei.image_url AS establishment_image,
                    r.created_at
                FROM ratings AS r
                INNER JOIN users AS u ON r.id_user = u.id
                INNER JOIN establishments AS e ON r.id_establishment = e.id
                INNER JOIN establishment_images AS ei ON e.id = ei.id_establishment
                INNER JOIN user_categories AS uc ON uc.checkpoint = CAST(u.global_score AS INTEGER)
                WHERE ei.cover = true
                ORDER BY r.updated_at DESC;
            `)
        
            return {ratings}
    })

    app.post('/', async (request, reply) => {
        try{
            const createRatingSchema = zod.object({
                id_user: zod.string(),
                id_establishment: zod.string(),
                review: zod.string(),
                stars: zod.number()
            })
            
            const {id_user, id_establishment, review, stars} = createRatingSchema.parse(request.body)
            
            await db('ratings').insert({
                id: randomUUID(),
                id_user,
                id_establishment,
                review,
                stars,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            
            console.log('created')
            return {message: 'Rating created successfully'}
        }catch(e){
            console.log(e)
            return reply.status(400).send({message: 'Error creating rating'})
        }
    })
}
