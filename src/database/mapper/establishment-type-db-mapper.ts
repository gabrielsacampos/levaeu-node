import { EstablishmentType } from "../../models/establishment-type";
import { Tables } from 'knex/types/tables';

type KnexEstablishmentType = Tables['establishment_types']


export class EstablishmentDbMapper {
    static toDomain(raw: KnexEstablishmentType): EstablishmentType {
        return new EstablishmentType({
            id: raw.id,
            name: raw.name,
        })
    }
    static toDatabase(establishmentType: EstablishmentType): KnexEstablishmentType{
        return {
            id: establishmentType.id,
            name: establishmentType.name,
        }
    }
}