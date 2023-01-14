import { CreateUserUseCase } from "#/domain/use-cases/create-user-usecase";
import { FindUserById } from "#/domain/use-cases/find-user-by-id-usecase";
export declare class AppController {
    private readonly findUserById;
    private readonly createUserUseCase;
    constructor(findUserById: FindUserById, createUserUseCase: CreateUserUseCase);
    findById(id: number): Promise<import("../domain/entities/user-entity").UserEntity>;
    create(): Promise<import("../domain/entities/user-entity").UserEntity>;
}
