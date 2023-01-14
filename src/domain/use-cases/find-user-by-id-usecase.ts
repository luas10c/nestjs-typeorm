import { TypeormUserRepository } from "#/infra/database/repositories/typeorm-user-repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class FindUserById {
  constructor(private readonly userRepository: TypeormUserRepository) {}

  async execute(id: number) {
    const data = await this.userRepository.findById(id);
    if (!data) {
      throw new NotFoundException("User Not Found");
    }

    return data;
  }
}
