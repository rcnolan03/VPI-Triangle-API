import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { User } from 'src/Interfaces/tables';

@Controller('user')
export class UserController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/all')
  async getUsers() {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get(':userId')
  async getUser(@Param('userId') userId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user')
      .select()
      .eq('uid', userId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  @Post()
  async createUser(@Body() userData: User) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user')
      .insert(userData);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user')
      .delete()
      .eq('uid', userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Put(':userId')
  async updateUser(@Param('userId') userId: string, @Body() userData: User) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('user')
      .update(userData)
      .eq('uid', userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Post(':userId/logged-in')
  async addLoginHistory(@Param() userId: any) {
    const newLoginTimestamp = {
        platform: 'desktop',
        browser: 'edge',
        ip_address: '1.1.1.1',
        type: 'loggin',
        userId: userId
    }
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('login_history')
      .insert(newLoginTimestamp);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
