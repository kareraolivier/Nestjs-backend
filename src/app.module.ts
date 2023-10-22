import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BlogsController } from './blogs/blogs.controller';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    BlogsController,
    ItemsController,
  ],
  providers: [AppService, ItemsService],
})
export class AppModule {}
