import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { CommitteesController } from './controllers/committee.controller';
import { LoginHistoryController } from './controllers/login_history.controller';
import { PledgeClassController } from './controllers/pledge_class.controller';
import { UserRoleController } from './controllers/user_role.controller';
import { SupabaseService } from './supabase/supabase.service';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  providers: [SupabaseService, FirebaseAuthStrategy],
  exports: [SupabaseService],
  controllers: [UserController, UserRoleController, PledgeClassController, LoginHistoryController, CommitteesController],
})
export class AppModule {}
