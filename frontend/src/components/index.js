import React, { useEffect, useState } from 'react';
import queryString from 'querystring'


const Spootify = () => {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        const parsed = queryString.parse(window.location.pathname.slice(1))
        if (parsed.access_token) {
            const { access_token } = parsed
            const options = {
                url: "https://api.spotify.com/v1/me",
                headers: { "Authorization": "Bearer " + access_token },
                json: true
            }
            fetch(options.url, { headers: options.headers }).then(response => response.json()).then(profil => setProfile(profil))
        }
    }, [])
    if (profile) {
        return (
            <h1>{profile.display_name}</h1>
        )
    }

}

export default Spootify;