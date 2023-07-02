import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { AuthChangeEvent, AuthSession, Session } from '@supabase/supabase-js';

@Controller('auth')
export class AuthController {
  _session: AuthSession | null = null
  _access_token;
  
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('/session')
  get session() {
    this.supabaseService.getSupabase().auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  @Get('/auth-changes')
  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabaseService.getSupabase().auth.onAuthStateChange(callback)
  }
  
  @Post('/sign-up')
  async signUp(@Body() loginData: any) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .auth
      .signUp({email: loginData.email, password: loginData.password});

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get('/sign-in')
  async signIn(@Body() loginData: any) {
    const { data, error } = await this.supabaseService
      .getSupabase()
      .auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  @Get('/sign-out')
  async signOut() {
    const { error } = await this.supabaseService.getSupabase().auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  }
}