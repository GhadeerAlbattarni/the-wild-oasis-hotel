import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hylxwjgzlaznjsaovqcy.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bHh3amd6bGF6bmpzYW92cWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNDM2MDUsImV4cCI6MjA0MTcxOTYwNX0.y0aBold7sJXf73ORiEtin3Jj7Y4sMUX8ZUaK6gn4PVY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
