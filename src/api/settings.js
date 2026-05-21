import { supabase } from "./supabase";

export async function getSettings() {
  let { data: settings, error } = await supabase.from("settings").select("*");

  return settings;
}
