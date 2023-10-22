import { Controller, Get } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  @Get()
  findAll(): string {
    return 'This action returns all blogs';
  }
}
