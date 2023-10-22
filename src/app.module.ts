import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BlogsController } from './blogs/blogs.controller';
import { mongoUrl } from './config/Index';
import { ItemsModule } from './items/items.module';
@Module({
  imports: [ItemsModule, MongooseModule.forRoot(mongoUrl)],
  controllers: [AppController, UsersController, BlogsController],
  providers: [AppService],
})
export class AppModule {}
