import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { mongoUrl } from "./config/Index";
import { ItemsModule } from "./items/items.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
@Module({
  imports: [
    ItemsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(mongoUrl),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
