import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

const supabaseUrl = "https://vutrlvuomluodwzkjted.supabase.co";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dHJsdnVvbWx1b2R3emtqdGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNzI2MzUsImV4cCI6MjAyOTk0ODYzNX0.ZbiVLLELcin6hVnbDLl4498q4llXVszJMp8OgyIIkik";

export const supabase = createClient(supabaseUrl, supabaseApiKey);
