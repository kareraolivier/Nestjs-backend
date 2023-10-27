import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { User } from "./interface/user.interface";
import { UsersService } from "./users.service";
import { userDto } from "./dto/user.dto";
import { LocalAuthGuard } from "src/auth/local.auth.guard";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(LocalAuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Post()
  registerUser(@Body() userDto: userDto): Promise<User> {
    return this.usersService.registerUser(userDto);
  }
}
