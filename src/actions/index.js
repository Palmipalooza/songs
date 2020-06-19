// Action Creator
export const selectSong = song => {
  // return an Action
  return {
    // must have option property
    type: 'SONG_SELECTED',
    // can have payload property
    payload: song,
  };
};
