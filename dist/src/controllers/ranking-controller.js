"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rankingController = rankingController;
const database_1 = require("../database/database");
async function rankingController(app) {
    app.get('/', async () => {
        const users = await database_1.db.raw(`
            SELECT 
                u.name AS user_name,
                u.image_url AS user_image_url,
                uc.name AS user_category,
                u.global_score,
                u.week_score,
                u.created_at
            FROM users AS u
            INNER JOIN user_categories AS uc ON uc.checkpoint = CAST(u.global_score AS INTEGER)
            ORDER BY week_score DESC;    
        `);
        return { users };
    });
}
