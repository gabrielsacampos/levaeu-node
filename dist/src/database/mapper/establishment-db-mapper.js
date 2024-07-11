"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishmentDbMapper = void 0;
const Establishment_1 = require("../../models/Establishment");
class EstablishmentDbMapper {
    static toDomain(establishment) {
        return new Establishment_1.Establishment({
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
        });
    }
    static toDb(establishment) {
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
        };
    }
}
exports.EstablishmentDbMapper = EstablishmentDbMapper;
