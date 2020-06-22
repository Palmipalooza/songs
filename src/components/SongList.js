import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    console.log('this.props', this.props);
    return <div>Song List</div>;
  }
}

const mapStateToProps = state => {
  console.log('state', state);

  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
