import { Repository } from "typeorm";
import { UserEntity } from "#/domain/entities/user-entity";
export declare class TypeormUserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findById(id: number): Promise<UserEntity>;
    create(user: UserEntity): Promise<void>;
}
