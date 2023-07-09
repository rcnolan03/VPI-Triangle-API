import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { LoginHistory } from 'src/Interfaces/tables';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';

@Controller('login-history')
@ApiTags('login-history')
@UseGuards(FirebaseAuthGuard)
export class LoginHistoryController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/all')
  async getLoginHistories() {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('login_history')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get(':loginId')
  async getLoginHistory(@Param('loginId') loginId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('login_history')
      .select()
      .eq('id', loginId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  @Post(':userId')
  async createLoginHistory(@Param('userId') userId: any) {
    const newLoginTimestamp: LoginHistory = {
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

  @Delete(':loginId')
  async deleteLoginHistory(@Param('loginId') loginId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('login_history')
      .delete()
      .eq('id', loginId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
