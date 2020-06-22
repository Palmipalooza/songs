import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  // method that gets our list of songs, maps over them, and returns them as jsx
  renderList() {
    const list = this.props.songs.map(song => {
      return (
        <div>
          title: {song.title}
          <div>duration: {song.duration}</div>
        </div>
      );
    });
    return list;
  }

  render() {
    return <div>Song List: {this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
