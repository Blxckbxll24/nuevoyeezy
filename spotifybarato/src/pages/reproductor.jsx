import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const CLIENT_ID = "453d6c17658a4a4a8498f17cb1b22b75";
const CLIENT_SECRET = "6d243006672b46cea52da45f4fa7b0f7";

const Player = () => {
  const [token, setToken] = useState(''); // Estado para almacenar el token de acceso
  const [trackUri, setTrackUri] = useState(''); // Estado para almacenar el URI de la canción que se va a reproducir

  useEffect(() => {
    var authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(result => result.json())
        .then(data => setToken(data.access_token));
}, []);

  const handlePlay = ({ spotify_uri }) => {
    setTrackUri(spotify_uri); // Actualizar el estado del URI de la canción que se va a reproducir
  };

  return (
    <div>
      <button onClick={() => handlePlay({ spotify_uri: 'spotify:track:TU_ID_DE_CANCION' })}>Reproducir canción</button>
      {token && <SpotifyPlayer token={token} uris={trackUri ? [trackUri] : []} />}
    </div>
  );
};

export default Player;
