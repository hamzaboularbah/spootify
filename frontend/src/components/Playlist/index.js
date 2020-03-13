import React, { useEffect, useContext, useState } from 'react';
import Track from '../Track';
import { MainContext } from '../../store';
import styled from 'styled-components';
import Spinner from '../kits/Spinner';
import { findWithAttr } from '../../utils';

const StyleBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  padding-bottom: 80px;
  @media (max-width: 1600px) {
    justify-content: space-around;
  }
`;

const Playlist = ({ match }) => {
  const [tracks, setTracks] = useState([]);
  const { playlistId } = match.params;
  const { Spotify, setActiveNavLink, playlists } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const songs = [];
    const options = {
      offset: 100,
      limit: 100,
      fields: 'items',
    };
    if (playlistId) {
      Spotify.getPlaylistTracks(playlistId, options).then(data => {
        data.items.forEach(item => {
          songs.push(item.track);
        });
        setTracks(songs);
        setIsLoading(false);
      });
      // setting the active link for the navbar
      setActiveNavLink(
        9 + findWithAttr(playlists, 'id', playlistId) >= 9
          ? 9 + findWithAttr(playlists, 'id', playlistId)
          : null
      );
    }
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
