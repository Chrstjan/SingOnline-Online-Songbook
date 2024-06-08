import { receivedAllSongs } from "../Components/songs/receivedSongs.js";
import { supabase } from "../Utils/supabase/supabaseClient.js";

const getAllSongTitles = async () => {
  const { data, error } = await supabase
    .from("songs")
    .select("id, title, content, created_at, artist(name)");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const recievedAllSongTitles = async () => {
  try {
    const titles = await getAllSongTitles();
    receivedAllSongs(titles);
    return titles;
  } catch (error) {
    console.error(`Error fetching song titles: ${error}`);
  }
};
