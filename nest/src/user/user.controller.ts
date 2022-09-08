import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleGuard } from './../auth/guard/role.guard';
import { Constants } from './../utils/constants';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signUp')
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiSecurity('JWT-auth')
  @Get()
  @UseGuards(new RoleGuard(Constants.Roles.ADMIN))
  findAll(@Req() req) {
    // console.log(req.user);
    return this.userService.findAll();
  }

  // @ApiSecurity('JWT-auth')
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Get(':email')
  // findOneByEmail(@Param('email') email: string) {
  //   return this.userService.findOneByEmail(email);
  // }

  // @ApiSecurity('JWT-auth')
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  @ApiSecurity('JWT-auth')
  @Delete(':id')
  @UseGuards(new RoleGuard(Constants.Roles.ADMIN))
  remove(@Param('id') id: string, @Req() req) {
    // console.log(req.user);
    return this.userService.remove(+id);
  }
}
