"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const node_path_1 = __importDefault(require("node:path"));
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                name: "default",
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "example",
                entities: [
                    node_path_1.default.resolve(__dirname, "..", "..", "domain", "entities", "*.{js,ts}"),
                ],
            }),
        ],
        providers: [
            {
                provide: typeorm_2.DataSource,
                async useFactory() {
                    const datasource = new typeorm_2.DataSource({
                        name: "default",
                        type: "postgres",
                        host: "localhost",
                        port: 5432,
                        username: "postgres",
                        password: "example",
                        entities: [
                            node_path_1.default.resolve(__dirname, "..", "..", "domain", "entities", "*.{js,ts}"),
                        ],
                    });
                    await datasource.initialize();
                    return datasource;
                },
            },
        ],
        exports: [typeorm_2.DataSource],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map