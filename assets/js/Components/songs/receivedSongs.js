//import { buildPopularSongs } from "../landingPage.js";

export const receivedAllSongs = async (songs) => {
  let allSongs = songs;

  let allSongsArr = [];
  allSongsArr = [...allSongsArr, ...allSongs];
  console.log(allSongs);
  console.log(allSongsArr);

  //Getting the data but can't use it to build dom elements?
  //buildPopularSongs(allSongsArr);
};
