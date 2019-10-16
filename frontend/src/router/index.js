import React from "react";
import { Switch, Route } from "react-router-dom";
import Track from "../components/Track";
import Playlist from "../components/Playlist";
import Favorites from "../components/Favorites";

let RouterView = props => {
  return (
    <Switch>
      <Route exact path="/" component={Track} />
      <Route path="/playlist/:playlistId" component={Playlist} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
};

export default RouterView;
