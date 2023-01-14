import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "#/domain/entities/user-entity";

@Injectable()
export class TypeormUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findById(id: number) {
    const data = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    return data;
  }

  async create(user: UserEntity) {
    this.userRepository.save(user);
  }
}
