import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import path from "node:path";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "example",
      entities: [
        path.resolve(__dirname, "..", "..", "domain", "entities", "*.{js,ts}"),
      ],
    }),
  ],
  providers: [
    {
      provide: DataSource,
      async useFactory() {
        const datasource = new DataSource({
          name: "default",
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "example",
          entities: [
            path.resolve(
              __dirname,
              "..",
              "..",
              "domain",
              "entities",
              "*.{js,ts}"
            ),
          ],
        });

        await datasource.initialize();
        return datasource;
      },
    },
  ],
  exports: [DataSource],
})
export class DatabaseModule {}
