// import { createClient } from '@supabase/supabase-js';

// // Initialize Supabase client - these will be set after connecting to Supabase
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client - these will be set after connecting to Supabase
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseUrl = "https://pebkjqkxcdhmbviwfcmu.supabase.co";

// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYmtqcWt4Y2RobWJ2aXdmY211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDY3ODUsImV4cCI6MjA1MTcyMjc4NX0.QYehULAnRQBsKAsqHDQf8c994LuqR3O-MJ28mq0f0zw";


export const supabase = createClient(supabaseUrl, supabaseKey);