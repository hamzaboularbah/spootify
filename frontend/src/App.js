import React, { useEffect, useContext } from "react";
import Spootify from "./components";
import dotenv from "dotenv";
import queryString from "querystring";
import { MainContext } from "./store";
dotenv.config();

const App = () => {
  const { profile, setProfile } = useContext(MainContext);
  useEffect(
    _ => {
      const parsed = queryString.parse(window.location.pathname.slice(1));
      if (parsed.access_token) {
        const { access_token } = parsed;
        localStorage.setItem("spootify-token", access_token);
        const options = {
          url: `${process.env.REACT_APP_BASE_URL}/me`,
          headers: { Authorization: "Bearer " + access_token },
          json: true
        };
        fetch(options.url, { headers: options.headers })
          .then(response => response.json())
          .then(profil => setProfile(profil));
      } else {
        const loginURL = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_API_PORT}/login`;
        window.location = loginURL;
      }
    },
    [setProfile]
  );

  return <>{profile.id && <Spootify />}</>;
};

export default App;
