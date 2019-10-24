import React from "react";
import { Switch, Route } from "react-router-dom";
import Playlist from "../components/Playlist";
import Favorites from "../components/Favorites";

let DashboardRoutes = props => {
  return (
    <Switch>
      <Route path="/app/playlist/:playlistId" component={Playlist} />
      <Route path="/app/favorites" component={Favorites} />
    </Switch>
  );
};

export default DashboardRoutes;
