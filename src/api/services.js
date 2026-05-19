import { supabase } from "./supabase";

export async function getMainCategoriesWithSubcategories() {
  const { data, error } = await supabase.from("main_category").select(`
    *,
     subcategory(
    *
    )`);
  return data;
}
