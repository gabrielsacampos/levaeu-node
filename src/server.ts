import {fastify} from 'fastify';
import cors from '@fastify/cors';
import { env } from './env';
import { establishmentsController } from './controllers/establishments-controller';
import { ratingsController } from './controllers/ratings-controller';
import { usersController } from './controllers/users-controller';
import { rankingController } from './controllers/ranking-controller';
import { establishmentTypesController } from './controllers/establishment-types-controller';

const app = fastify();

app.register(establishmentsController, {prefix: '/establishments'});
app.register(ratingsController, {prefix: '/ratings'})
app.register(usersController, {prefix: '/users'})
app.register(rankingController, {prefix: '/ranking'})
app.register(establishmentTypesController, {prefix: '/establishment_types'})

app.register(cors, {
    origin: '*'
})

app.listen({
    port: env.PORT,
    host: '0.0.0.0'
}).then(() => {
    console.log(`Server running at http://localhost:${env.PORT}`);
}).catch((err) => {
    console.error(err);
    process.exit(1);
})