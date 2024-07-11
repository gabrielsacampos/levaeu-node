"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDbMapper = void 0;
const User_1 = require("../../models/User");
class UserDbMapper {
    static toDomain(raw) {
        return new User_1.User({
            id: raw.id,
            name: raw.name,
            email: raw.email,
            images: raw.images,
            globalScore: raw.global_score,
            weekScore: raw.week_score,
            created_at: raw.created_at,
            updated_at: raw.updated_at
        });
    }
    static toDb(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            images: user.images,
            global_score: user.globalScore,
            week_score: user.weekScore,
            created_at: user.createdAt,
            updated_at: user.updatedAt
        };
    }
}
exports.UserDbMapper = UserDbMapper;
