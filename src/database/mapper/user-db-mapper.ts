import { Tables } from 'knex/types/tables';
import { User } from '../../models/User';

type KnexUser = Tables['users']

export class UserDbMapper {
    static toDomain(raw: KnexUser): User {
        return new User({
            id: raw.id,
            name: raw.name,
            email: raw.email,
            images: raw.images,
            globalScore: raw.global_score,
            weekScore: raw.week_score,
            created_at: raw.created_at,
            updated_at: raw.updated_at
        })
    }
    static toDb(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            images: user.images,
            global_score: user.globalScore,
            week_score: user.weekScore,
            created_at: user.createdAt,
            updated_at: user.updatedAt
        }
    }
}