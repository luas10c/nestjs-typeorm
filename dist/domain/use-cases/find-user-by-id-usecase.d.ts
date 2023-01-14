import { TypeormUserRepository } from "#/infra/database/repositories/typeorm-user-repository";
export declare class FindUserById {
    private readonly userRepository;
    constructor(userRepository: TypeormUserRepository);
    execute(id: number): Promise<import("../entities/user-entity").UserEntity>;
}
