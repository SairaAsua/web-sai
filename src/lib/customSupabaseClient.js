import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xoxydwonfsklurjcwlcn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhveHlkd29uZnNrbHVyamN3bGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNjgwNzUsImV4cCI6MjA4Mzk0NDA3NX0.u1PNf8vHXUQJOj0zsFgoPY-T36H9yd1BOyOHFVvOeAs';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
