import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      process.env.PROJECTURL,
      process.env.API_KEY,
    );
  }

  getSupabase(): SupabaseClient {
    return this.supabase;
  } 
}
