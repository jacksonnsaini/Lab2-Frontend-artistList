import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistCard from '../components/artistCard';
import './index.css';

function App() {

  return (
    <div className="app">
      <div className="headerContainer">
          <h1 className="header">Best-selling Music Artists</h1>
        </div>
      <div>
            {artists.map((artist, index) => (
                <ArtistCard key={index} artist={artist} />
            ))}

        </div>
    </div>
  );
}

export default App;
