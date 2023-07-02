import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { UserController } from 'src/controllers/user.controller';
import { UserRoleController } from 'src/controllers/user_role.controller';
import { PledgeClassController } from 'src/controllers/pledge_class.controller';
import { LoginHistoryController } from 'src/controllers/login_history.controller';
import { CommitteesController } from 'src/controllers/committee.controller';
import { AuthController } from 'src/controllers/auth.controller';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],
  controllers: [UserController, UserRoleController, PledgeClassController, LoginHistoryController, CommitteesController, AuthController]
})
export class SupabaseModule {}
