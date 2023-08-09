import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

// ---------- ---------- ---------- ---------- ----------

import { UsersService } from '../services/users.service';
import { UserDTO, UserToStoreDTO, UserUpdateDTO } from '../dto/user.dto';
import { PublicAcces } from 'src/auth/decorators/public.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles('ADMIN')
  @Get('all')
  async getAllUsers() {
    return await this.usersService.findAllUsers();
  }

  //@PublicAcces()
  @Get(':id')
  public async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    // A CHECKEAR EL PARSE
    return await this.usersService.findOneUser(id);
  }

  @Roles('ADMIN')
  //@PublicAcces()
  @Post('register')
  public async registerUser(@Body() body: UserDTO) {
    return await this.usersService.createUser(body);
  }

  @Put('edit/:id')
  public async updateUser(
    @Param('id') id: string,
    @Body() body: UserUpdateDTO,
  ) {
    console.log(id);
    return await this.usersService.updateUser(id, body);
  }

  @Delete('delete/:id')
  public async deleteUser(@Param('id') id: string) {
    console.log(id);

    return await this.usersService.deleteUser(id);
  }

  // ---------- ----------  RELATIONS  ---------- ----------

  @Post('add-to-store')
  public async addToStore(@Body() body: UserToStoreDTO) {
    return await this.usersService.relationToStore(body);
  }
}
