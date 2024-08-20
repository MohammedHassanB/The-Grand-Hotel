import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gncpwwuvkatnivfvulmb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduY3B3d3V2a2F0bml2ZnZ1bG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNDcxOTUsImV4cCI6MjAzODYyMzE5NX0.ZEIZt8SZRszHyiHBqH4ev36d5EmHjIwcwAxh_LqO0SI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
