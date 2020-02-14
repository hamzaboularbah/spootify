import React, { useEffect, useContext, useState } from 'react';
import Track from '../Track';
import { MainContext } from '../../store';
import styled from 'styled-components';
import Spinner from '../kits/Spinner';

const StyleBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const Playlist = ({ match }) => {
  const [tracks, setTracks] = useState([]);
  const { playlistId } = match.params;
  const { Spotify } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let isSubscribed = true;
    const songs = [];
    const options = {
      offset: 1,
      limit: 100,
      fields: 'items',
    };
    if (isSubscribed) {
      Spotify.getPlaylistTracks(playlistId, options).then(data => {
        data.items.forEach(item => {
          songs.push(item.track);
        });
        setTracks(songs);
        setIsLoading(false);
      });
    }
    return () => (isSubscribed = false);
  }, [Spotify, playlistId]);
  return (
    <StyleBase>
      {!isLoading ? (
        tracks.length > 0 ? (
          tracks.map(track => <Track key={track.id} track={track}></Track>)
        ) : (
          <p>No Tracks available in this playlist ...</p>
        )
      ) : (
        <Spinner />
      )}
    </StyleBase>
  );
};

export default Playlist;
