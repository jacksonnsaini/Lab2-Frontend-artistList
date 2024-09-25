import React from 'react';
import '../src/index.css';

const ArtistCard = ({ artist }) => {
    return (
      <div>
        <div className="container">
          <img src={artist.photo_url} />
          <div className="artist">
            <h2>{artist.name}</h2>
            <p>Country: {artist.country}</p>
            <p>Years Active: {artist.years_active}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArtistCard