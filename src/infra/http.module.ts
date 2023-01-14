import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";

import { UserEntity } from "#/domain/entities/user-entity";

import { TypeormUserRepository } from "./database/repositories/typeorm-user-repository";

import { CreateUserUseCase } from "#/domain/use-cases/create-user-usecase";
import { FindUserById } from "#/domain/use-cases/find-user-by-id-usecase";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AppController],
  providers: [TypeormUserRepository, CreateUserUseCase, FindUserById],
})
export class HttpModule {}
