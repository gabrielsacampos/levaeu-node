"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishmentDbMapper = void 0;
const establishment_type_1 = require("../../models/establishment-type");
class EstablishmentDbMapper {
    static toDomain(raw) {
        return new establishment_type_1.EstablishmentType({
            id: raw.id,
            name: raw.name,
        });
    }
    static toDatabase(establishmentType) {
        return {
            id: establishmentType.id,
            name: establishmentType.name,
        };
    }
}
exports.EstablishmentDbMapper = EstablishmentDbMapper;
