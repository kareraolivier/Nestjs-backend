import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { createItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: createItemDto): string {
    return `Name ${createItemDto.name} Desc ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `item ${id} is deleted`;
  }

  @Patch(':id')
  update(@Body() updateteItemDto: createItemDto, @Param('id') id): string {
    return `item in id ${id} are Name ${updateteItemDto.name} Desc ${updateteItemDto.description}`;
  }
}
