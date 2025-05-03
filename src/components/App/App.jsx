import React, { useState } from 'react';
import './App.css'
//import Playlist from '../Playlist/Playlist';
//import SearchBar from '../SearchBar/SearchBar';
//import SearchResults from '../SearchResults/SearchResults';
//import Spotify from '../../util/Spotify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <div className="App">
        
        <div className='App-playlist'>
         
        </div>
      </div>
    </div>
  )
}

export default App
