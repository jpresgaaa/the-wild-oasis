import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xpgkllinowktryeebgar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZ2tsbGlub3drdHJ5ZWViZ2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODQ5MjgsImV4cCI6MjA5MTM2MDkyOH0.olvwnVVczC449oEl6SfspGHL0j5NPykBwBreFQXvc9Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
