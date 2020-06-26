import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Dark Side of the Moon', duration: '4:35' },
    { title: 'Purple Haze', duration: '16:02' },
    { title: 'All You Need is Love', duration: '3:48' },
    { title: 'Imagine', duration: '2:16' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  // from selectSong action
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
