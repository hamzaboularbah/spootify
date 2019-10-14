import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Track from "../components/Track";
import Playlist from "../components/Playlist";

let RouterView = props => {
  return (
    <Switch>
      <Route exact path="/" component={Track} />
      <Route path="/playlist/:playlistId" component={Playlist} />
    </Switch>
  );
};

export default RouterView;
