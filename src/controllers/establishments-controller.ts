import { FastifyInstance } from "fastify";
import { db } from "../database/database";
import { z } from 'zod';
import { randomUUID } from "crypto";



export async function establishmentsController(app: FastifyInstance){
  
  app.get('/topcards', async () => {
    const establishments = await db.raw(`
      SELECT e.*, ei.*, AVG(r.stars) AS average_rating
      FROM establishments AS e
      INNER JOIN establishment_images AS ei ON e.id = ei.id_establishment
      INNER JOIN ratings AS r ON e.id = r.id_establishment
      WHERE ei.cover = true AND e.tag != 'none'
      GROUP BY e.id
    `)      
    return { establishments }
  })

  app.get('/', async () => { 
    const establishments = await db('establishments').select('*');
    return { establishments }
  })

  app.get('/:id', async (request, reply) => { 
    
    const getEstablishmentSchema = z.object({
      id: z.string()
    })

    const {id} = getEstablishmentSchema.parse(request.params);

    const establishment = await db('establishments').where({id}).select('*').first();
    establishment
    return establishment;
  })
  
  app.post('/', async (request, reply) => {

        const createEstablishmentSchema = z.object({
            name: z.string(),
            address: z.string(),
            description: z.string(),
            id_sponsor: z.string()
        })

        const {name, address, description, id_sponsor} = createEstablishmentSchema.parse(request.body);

        await db('establishments').insert(
          {
            id: randomUUID(),
            name, 
            address, 
            description, 
            id_sponsor
          }
        );
        
        
        return reply.status(201).send({message: 'Establishment created'});  
      })
      
}