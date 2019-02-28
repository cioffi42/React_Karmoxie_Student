import React, { Component } from 'react';
import './App.css';
//import "./bootstrap.min.css";
import ALBUMS from './data/music-info.json';
import AlbumCardList from './components/AlbumCardList';

class App extends Component {
  render() {
    return (
      <div className="container-fluid mt-2">
        <h1>Albums</h1>
        <AlbumCardList albumCards={ALBUMS} />
      </div>
    );
  }
}

export default App;
