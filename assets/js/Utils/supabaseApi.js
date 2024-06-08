import { supabase } from "../Utils/supabase/supabaseClient.js";

const getAllSongTitles = async () => {
  const { data, error } = await supabase.from("songs").select("title");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const recievedAllSongTitles = async () => {
  try {
    const titles = await getAllSongTitles();
    console.log(titles);
    return titles;
  } catch (error) {
    console.error(`Error fetching song titles: ${error}`);
  }
};
