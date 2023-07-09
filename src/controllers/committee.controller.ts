import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Committee } from 'src/Interfaces/tables';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';

@Controller('committee')
@ApiTags('committee')
@UseGuards(FirebaseAuthGuard)
export class CommitteesController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/all')
  async getCommittees() {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('committee')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get(':committeeId')
  async getCommittee(@Param('committeeId') committeeId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('committee')
      .select()
      .eq('id', committeeId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  @Post()
  async createCommittee(@Body() committeeData: Committee) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('committee')
      .insert(committeeData);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Delete(':committeeId')
  async deleteCommittee(@Param('committeeId') committeeId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('committee')
      .delete()
      .eq('id', committeeId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Put(':committeeId')
  async updateCommittee(@Param('committeeId') committeeId: string, @Body() committeeData: Committee) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('committee')
      .update(committeeData)
      .eq('id', committeeId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
