import React, { useState } from 'react';
export const MainContext = React.createContext({});

const Provider = ({ children }) => {
    const [profile, setProfile] = useState({})
    const [playlists, setPlaylists] = useState({})
    return (
        <MainContext.Provider value={{ profile, setProfile, playlists, setPlaylists }}>
            {children}
        </MainContext.Provider>
    )
}

export default Provider;