import { Module } from '@nestjs/common';
import { SupabaseModule } from './supabase/supabase.module';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SupabaseModule,
  ],
  controllers: [UserController],
})
export class AppModule {}
