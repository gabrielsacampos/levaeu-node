import {env} from '../env';

import { knex, Knex } from 'knex';


export const config: Knex.Config = {
    client: 'sqlite3',
    connection: {
        filename: env.DATABASE_URL
    },
    useNullAsDefault: true,
    migrations: {
        directory: './db/migrations',
        extension: 'ts'
    }
}

export const db = knex(config);