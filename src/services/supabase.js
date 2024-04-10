import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hvhyxswcnnrtdmiotehe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2aHl4c3djbm5ydGRtaW90ZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NTE4NDEsImV4cCI6MjAyNzAyNzg0MX0.aFoKWrPShnS-1DzbIiU1mdFRL7BGXs6AnxGaVLrzvKw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
