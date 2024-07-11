"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingsController = ratingsController;
const database_1 = require("../database/database");
const zod = __importStar(require("zod"));
const crypto_1 = require("crypto");
async function ratingsController(app) {
    app.get('/', async () => {
        const ratings = await database_1.db.raw(`
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
            `);
        return { ratings };
    });
    app.post('/', async (request, reply) => {
        try {
            const createRatingSchema = zod.object({
                id_user: zod.string(),
                id_establishment: zod.string(),
                review: zod.string(),
                stars: zod.number()
            });
            const { id_user, id_establishment, review, stars } = createRatingSchema.parse(request.body);
            await (0, database_1.db)('ratings').insert({
                id: (0, crypto_1.randomUUID)(),
                id_user,
                id_establishment,
                review,
                stars,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            });
            console.log('created');
            return { message: 'Rating created successfully' };
        }
        catch (e) {
            console.log(e);
            return reply.status(400).send({ message: 'Error creating rating' });
        }
    });
}
