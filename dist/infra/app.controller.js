"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const create_user_usecase_1 = require("../domain/use-cases/create-user-usecase");
const find_user_by_id_usecase_1 = require("../domain/use-cases/find-user-by-id-usecase");
let AppController = class AppController {
    constructor(findUserById, createUserUseCase) {
        this.findUserById = findUserById;
        this.createUserUseCase = createUserUseCase;
    }
    async findById(id) {
        const data = await this.findUserById.execute(id);
        return data;
    }
    async create() {
        const data = await this.createUserUseCase.execute();
        return data;
    }
};
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [find_user_by_id_usecase_1.FindUserById,
        create_user_usecase_1.CreateUserUseCase])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map