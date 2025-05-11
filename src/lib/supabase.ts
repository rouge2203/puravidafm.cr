import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://rmooyfcwgsbxymlcbepi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtb295ZmN3Z3NieHltbGNiZXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2Mzg5ODIsImV4cCI6MjA1NDIxNDk4Mn0.Dwl7LOlDj3MKnQUfk-Geliq-h68y7IdQiaZv1vMg4KQ"
);

export default supabase;
