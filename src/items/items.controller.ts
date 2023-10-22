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
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: createItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Patch(':id')
  update(
    @Body() updateteItemDto: createItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemsService.update(id, updateteItemDto);
  }
}
