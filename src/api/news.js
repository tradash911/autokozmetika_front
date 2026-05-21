import { supabase } from "./supabase";

export async function getNews() {
  let { data: news, error } = await supabase.from("news").select("*");
  return news;
}
