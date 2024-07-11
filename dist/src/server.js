"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const cors_1 = __importDefault(require("@fastify/cors"));
const env_1 = require("./env");
const establishments_controller_1 = require("./controllers/establishments-controller");
const ratings_controller_1 = require("./controllers/ratings-controller");
const users_controller_1 = require("./controllers/users-controller");
const ranking_controller_1 = require("./controllers/ranking-controller");
const establishment_types_controller_1 = require("./controllers/establishment-types-controller");
const app = (0, fastify_1.fastify)();
app.register(establishments_controller_1.establishmentsController, { prefix: '/establishments' });
app.register(ratings_controller_1.ratingsController, { prefix: '/ratings' });
app.register(users_controller_1.usersController, { prefix: '/users' });
app.register(ranking_controller_1.rankingController, { prefix: '/ranking' });
app.register(establishment_types_controller_1.establishmentTypesController, { prefix: '/establishment_types' });
app.register(cors_1.default, {
    origin: '*'
});
app.listen({
    port: env_1.env.PORT,
}).then(() => {
    console.log(`Server running at http://localhost:${env_1.env.PORT}`);
});
