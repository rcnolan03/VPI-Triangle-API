import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { PledgeClass } from 'src/Interfaces/tables';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';

@Controller('pledge-class')
@ApiTags('pledge-class')
@UseGuards(FirebaseAuthGuard)
export class PledgeClassController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/all')
  async getPledgeClasses() {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('pledge_class')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get(':classId')
  async getPledgeClass(@Param('classId') classId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('pledge_class')
      .select()
      .eq('id', classId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  @Post()
  async createPledgeClass(@Body() classData: PledgeClass) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('pledge_class')
      .insert(classData);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Delete(':classId')
  async deletePledgeClass(@Param('classId') classId: string) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('pledge_class')
      .delete()
      .eq('id', classId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Put(':classId')
  async updatePledgeClass(@Param('classId') classId: string, @Body() classData: PledgeClass) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .from('pledge_class')
      .update(classData)
      .eq('id', classId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
