import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fjiclmfdzjnmdfdbmolo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaWNsbWZkempubWRmZGJtb2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MDM0OTcsImV4cCI6MjA0MjQ3OTQ5N30.AIgIJWPM99TvKyKBuTNWtTkfRNj2VedcGm9aYfZ_86M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
