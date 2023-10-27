import {
  Dependencies,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bycrpt from "bcrypt";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/interface/user.interface";
import { JwtService } from "@nestjs/jwt";

@Injectable()
@Dependencies(UsersService, JwtService)
export class AuthService {
  usersService: any;
  jwtService: any;
  constructor(usersService, jwtService) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }
  async signIn(login: User): Promise<any> {
    const { email, password } = login;
    const loginUser = await this.usersService.getUserByEmail(email);
    if (!loginUser) {
      throw new UnauthorizedException("No user found");
    }
    const validPassword = await bycrpt.compare(password, loginUser.password);
    const user = {
      token: await this.jwtService.signAsync({
        name: loginUser.firstName,
        email: loginUser.email,
      }),
      loginUser,
    };
    return loginUser && validPassword ? user : null;
  }
}
