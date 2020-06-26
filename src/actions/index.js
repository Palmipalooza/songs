export const selectSong = song => {
  // if song is passed to it
  return {
    // returns an action that will end up in selectedSongReducer
    type: 'SONG_SELECTED',
    payload: song,
  };
};
