import { Injectable } from "@nestjs/common";

import { TypeormUserRepository } from "#/infra/database/repositories/typeorm-user-repository";

import { UserEntity } from "../entities/user-entity";

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: TypeormUserRepository) {}

  async execute(): Promise<UserEntity> {
    const user = new UserEntity();

    await this.userRepository.create(user);

    return user;
  }
}
