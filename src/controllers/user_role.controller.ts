import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { UserRole } from 'src/Interfaces/tables';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';

@Controller('user-role')
@ApiTags('user-role')
@UseGuards(FirebaseAuthGuard)
export class UserRoleController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/all')
  async getUsers() {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user_role')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get(':roleId')
  async getUser(@Param('roleId') roleId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user_role')
      .select()
      .eq('id', roleId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  @Post()
  async createUserRole(@Body() roleData: UserRole) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user_role')
      .insert(roleData);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Delete(':roleId')
  async deleteUser(@Param('roleId') roleId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user_role')
      .delete()
      .eq('id', roleId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Put(':roleId')
  async updateUser(@Param('roleId') roleId: string, @Body() roleData: UserRole) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user_role')
      .update(roleData)
      .eq('id', roleId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
