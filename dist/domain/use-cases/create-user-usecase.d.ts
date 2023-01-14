import { TypeormUserRepository } from "#/infra/database/repositories/typeorm-user-repository";
import { UserEntity } from "../entities/user-entity";
export declare class CreateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: TypeormUserRepository);
    execute(): Promise<UserEntity>;
}
