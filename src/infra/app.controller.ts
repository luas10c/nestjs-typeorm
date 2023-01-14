import { Controller, Get, Param, Post } from "@nestjs/common";

import { CreateUserUseCase } from "#/domain/use-cases/create-user-usecase";
import { FindUserById } from "#/domain/use-cases/find-user-by-id-usecase";

@Controller()
export class AppController {
  constructor(
    private readonly findUserById: FindUserById,
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  @Get(":id")
  async findById(@Param("id") id: number) {
    const data = await this.findUserById.execute(id);
    return data;
  }

  @Post()
  async create() {
    const data = await this.createUserUseCase.execute();
    return data;
  }
}
