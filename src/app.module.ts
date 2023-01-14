import { Module } from "@nestjs/common";

import { DatabaseModule } from "./infra/database/database.module";
import { HttpModule } from "#/infra/http.module";

@Module({
  imports: [DatabaseModule, HttpModule],
})
export class AppModule {}
