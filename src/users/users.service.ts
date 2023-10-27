import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./interface/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }
  async registerUser(user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    const newUser = new this.userModel(user);
    await newUser.save();
    return newUser;
  }
  async getUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }
  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }
}
