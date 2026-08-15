import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Using service role key for backend access

if (!supabaseUrl || !supabaseKey) {
  console.warn("Warning: Missing Supabase environment variables. Database queries will fail.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
