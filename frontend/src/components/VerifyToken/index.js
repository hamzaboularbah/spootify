import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import queryString from "querystring";
import { MainContext } from "../../store";

const VerifyToken = props => {
  const { profile, setProfile } = useContext(MainContext);
  useEffect(
    _ => {
      const parsed = queryString.parse(props.location.search.slice(1));
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
      }
    },
    [props.location.search, setProfile]
  );
  return profile.id ? <Redirect to="/app" /> : "..";
};

export default VerifyToken;
