import { Establishment } from "../../models/Establishment";
import { Tables } from 'knex/types/tables';

type KnexEstablishment = Tables['establishments']

export class EstablishmentDbMapper {
    static toDomain(establishment: KnexEstablishment): Establishment {
        return new Establishment({
            id: establishment.id,
            type: establishment.id_type,
            name: establishment.name,
            address: establishment.address,
            description: establishment.description,
            idType: establishment.id_type,
            idSponsor: establishment.id_sponsor,
            tag: establishment.tag,
            userId: 0,
            createdAt: establishment.created_at,
            updatedAt: establishment.updated_at
        })
    }
    static toDb(establishment: Establishment): KnexEstablishment {
        return {
            id: establishment.id,
            id_type: establishment.idType,
            name: establishment.name,
            address: establishment.address,
            description: establishment.description,
            id_sponsor: establishment.idSponsor,
            tag: establishment.tag,
            created_at: establishment.createdAt,
            updated_at: establishment.updatedAt
        }
    }
}