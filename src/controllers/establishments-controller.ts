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
    try{
      const createEstablishmentSchema = z.object({
          name: z.string(),
          cep: z.string(),
          city: z.string(),
          state: z.string(),
          address: z.string(),
          description: z.string(),
          id_sponsor: z.string(),
          establishment_type_id: z.string()
      })

        
      console.log(request.body)
      const {name, address, description, id_sponsor, city, state, cep, establishment_type_id} = createEstablishmentSchema.parse(request.body);
      const fullAddress = `${address}, ${city}, ${state}, ${cep}`


      await db('establishments').insert(
        {
          id: randomUUID(),
          name, 
          tag: 'none',
          address: fullAddress, 
          description, 
          id_sponsor,
          id_type: establishment_type_id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      );
      
      
      return reply.status(201).send({message: 'Establishment created'});  
    }catch(err){
      return reply.status(500).send({message: "Internal server error"});
    }
      })
      
}