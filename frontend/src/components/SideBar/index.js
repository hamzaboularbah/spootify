import React, { useEffect, useContext } from "react";
import Logo from "../Icons/Logo";
import { Link } from "react-router-dom";
import { Container, Section, Title, ItemsList, Item } from "./style";
import { MainContext } from "../../store";
import dotEnv from "dotenv";
dotEnv.config();

const SideBar = () => {
  const { profile, playlists, setPlaylists } = useContext(MainContext);
  useEffect(() => {
    const { id: user_id } = profile;
    const options = {
      url: `${process.env.REACT_APP_BASE_URL}/users/${user_id}/playlists`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("spootify-token")
      },
      json: true
    };
    fetch(options.url, { headers: options.headers })
      .then(response => response.json())
      .then(playlists => setPlaylists(playlists));
  }, [profile, setPlaylists]);
  return (
    <Container>
      <Logo width="105" height="32" />
      <Section>
        <Title>Browse music</Title>
        <ItemsList>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.909 16.479l-4.572-4.665a6.26 6.26 0 0 0 1.889-4.474c0-3.496-2.899-6.34-6.462-6.34C3.201 1 .302 3.844.302 7.34c0 3.495 2.899 6.34 6.462 6.34 1.564 0 3-.55 4.118-1.46l4.583 4.677a.31.31 0 0 0 .435.008.298.298 0 0 0 .009-.426zm-9.145-3.404C3.54 13.075.918 10.502.918 7.34c0-3.163 2.622-5.736 5.846-5.736S12.61 4.177 12.61 7.34c0 3.162-2.623 5.735-5.846 5.735z"
                opacity=".7"
              />
            </svg>
            <p>Explore</p>
          </Item>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M11 0C4.935 0 0 4.935 0 11s4.935 11 11 11 11-4.935 11-11S17.065 0 11 0zm0 21.267C5.339 21.267.733 16.66.733 11S5.34.733 11 .733 21.267 5.34 21.267 11 16.66 21.267 11 21.267z" />
                <path d="M11 8.067A2.937 2.937 0 0 0 8.067 11 2.937 2.937 0 0 0 11 13.933 2.937 2.937 0 0 0 13.933 11 2.937 2.937 0 0 0 11 8.067zm0 5.133c-1.213 0-2.2-.987-2.2-2.2s.987-2.2 2.2-2.2 2.2.987 2.2 2.2-.987 2.2-2.2 2.2z" />
                <path d="M11 5.867A5.139 5.139 0 0 0 5.867 11 5.139 5.139 0 0 0 11 16.133 5.139 5.139 0 0 0 16.133 11 5.139 5.139 0 0 0 11 5.867zm0 9.533A4.405 4.405 0 0 1 6.6 11c0-2.426 1.974-4.4 4.4-4.4s4.4 1.974 4.4 4.4-1.974 4.4-4.4 4.4z" />
              </g>
            </svg>
            <p>Hear this</p>
          </Item>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g opacity=".7">
                <path d="M12.594 11.586a.41.41 0 0 0-.406.414v2.483c0 3.194-2.552 5.793-5.688 5.793-3.136 0-5.688-2.599-5.688-5.793V12a.41.41 0 0 0-.406-.414A.41.41 0 0 0 0 12v2.483c0 3.51 2.7 6.384 6.094 6.6v2.09H4.062a.41.41 0 0 0-.406.413.41.41 0 0 0 .406.414h4.875a.41.41 0 0 0 .407-.414.41.41 0 0 0-.406-.414H6.905v-2.09c3.395-.215 6.094-3.089 6.094-6.6V12a.41.41 0 0 0-.406-.414z" />
                <path d="M6.5 19.034c2.464 0 4.469-2.042 4.469-4.551V4.552C10.969 2.042 8.964 0 6.5 0 4.036 0 2.031 2.042 2.031 4.552v9.93c0 2.51 2.005 4.552 4.469 4.552zM2.844 4.552C2.844 2.498 4.484.828 6.5.828s3.656 1.67 3.656 3.724v9.93c0 2.054-1.64 3.725-3.656 3.725s-3.656-1.67-3.656-3.724V4.552z" />
              </g>
            </svg>
            <p>Radio</p>
          </Item>
        </ItemsList>
      </Section>
      <Section>
        <Title>Your library</Title>
        <ItemsList>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g opacity=".7">
                <path d="M12 1C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1zm0 21.267C6.339 22.267 1.733 17.66 1.733 12S6.34 1.733 12 1.733 22.267 6.34 22.267 12 17.66 22.267 12 22.267z" />
                <path d="M12 3.2a.367.367 0 0 0-.367.367V12h-5.5a.367.367 0 1 0 0 .733H12a.367.367 0 0 0 .367-.366v-8.8A.367.367 0 0 0 12 3.2z" />
              </g>
            </svg>
            <p>Last added songs</p>
          </Item>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g opacity=".7">
                <path d="M21.962 6.402C21.642 2.893 19.14.347 16.01.347c-2.086 0-3.996 1.115-5.07 2.9-1.065-1.808-2.897-2.9-4.95-2.9C2.86.347.359 2.893.038 6.4c-.026.155-.13.97.187 2.301.456 1.919 1.51 3.664 3.046 5.045l7.664 6.905 7.795-6.904c1.536-1.382 2.59-3.127 3.046-5.046.316-1.33.212-2.145.187-2.3zm-1.01 2.108c-.417 1.752-1.382 3.348-2.789 4.613l-7.224 6.399-7.1-6.397c-1.41-1.268-2.375-2.864-2.791-4.616C.748 7.25.87 6.54.872 6.535l.006-.043c.275-3.074 2.425-5.305 5.112-5.305 1.983 0 3.729 1.21 4.557 3.156l.39.917.39-.917c.814-1.917 2.652-3.156 4.682-3.156 2.687 0 4.837 2.232 5.118 5.346 0 .006.124.718-.176 1.977z" />
                <path d="M6.769 2.9c-2.333 0-4.231 1.884-4.231 4.2 0 .232.19.42.423.42a.421.421 0 0 0 .423-.42c0-1.853 1.519-3.36 3.385-3.36a.421.421 0 0 0 .423-.42c0-.233-.19-.42-.423-.42z" />
              </g>
            </svg>
            <p>Favorites</p>
          </Item>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.172 15.496l-3.503-1.706a.937.937 0 0 1-.536-.844v-1.208c.084-.1.173-.214.264-.34a8.096 8.096 0 0 0 1.083-2.07c.517-.232.853-.73.853-1.292V6.607c0-.344-.132-.677-.366-.937v-1.9c.02-.196.1-1.366-.767-2.33C16.446.603 15.224.179 13.567.179c-1.658 0-2.88.424-3.633 1.26a3.06 3.06 0 0 0-.757 1.716c-.629-.316-1.37-.476-2.21-.476-3.81 0-4.031 3.162-4.034 3.214v1.635c-.237.252-.366.543-.366.832v1.234c0 .385.177.745.48.987.303 1.111 1.047 1.95 1.336 2.245v.98a.774.774 0 0 1-.429.684l-2.44 1.49A2.82 2.82 0 0 0 0 18.465v1.356h22v-1.444c0-1.227-.7-2.332-1.828-2.88zM5.133 18.308v.8h-4.4v-.643c0-.775.434-1.487 1.152-1.869l2.44-1.49c.488-.26.791-.757.791-1.3v-1.283L5 12.417c-.01-.008-.984-.905-1.272-2.127l-.033-.141-.125-.079a.564.564 0 0 1-.27-.476V8.36c0-.128.09-.281.246-.419l.12-.106V5.914c.007-.103.198-2.521 3.3-2.521.878 0 1.617.197 2.2.587v1.69c-.234.26-.366.593-.366.937v1.429c0 .108.013.215.037.319.01.041.03.079.043.119.02.06.037.122.065.178v.002c.095.189.232.357.404.492l.006.02c.022.081.045.163.07.242l.03.093.016.05.039.115c.022.062.045.127.072.197.011.03.024.056.035.085.03.075.06.147.092.218l.022.053.02.045.03.06c.035.076.07.15.107.221l.018.035.069.13a7.728 7.728 0 0 0 .325.55l.032.048c.088.134.165.242.23.327.016.023.03.042.045.06l.026.035v1.182a.94.94 0 0 1-.505.829l-.97.515-.17-.015-.068.142-2.063 1.096a3.21 3.21 0 0 0-1.724 2.829zm16.134.8h-15.4v-.8c0-.918.514-1.762 1.341-2.202l3.271-1.737c.548-.291.888-.85.888-1.457v-1.435l-.071-.083-.014-.016c-.001 0-.024-.028-.06-.075a3.402 3.402 0 0 1-.075-.098l-.002-.002a6.483 6.483 0 0 1-.2-.285l-.005-.008a6.933 6.933 0 0 1-.113-.178l-.008-.014a7.255 7.255 0 0 1-.259-.458v-.001a7.144 7.144 0 0 1-.139-.287l-.019-.04a7.088 7.088 0 0 1-.06-.14l-.023-.054-.059-.148a5.792 5.792 0 0 1-.106-.303l-.02-.064-.007-.022a5.474 5.474 0 0 1-.096-.346l-.033-.142-.125-.078a.708.708 0 0 1-.34-.6V6.608c0-.2.088-.387.246-.527l.121-.106v-2.35l-.01-.008c-.012-.258.003-1.048.595-1.706.608-.675 1.645-1.017 3.082-1.017 1.431 0 2.466.34 3.075 1.01.713.786.595 1.792.595 1.8l-.004 2.271.121.107c.159.139.246.326.246.526v1.429c0 .312-.21.584-.521.678l-.183.055-.059.176a7.4 7.4 0 0 1-1.039 2.04c-.109.151-.215.284-.307.386l-.091.101v1.474c0 .632.36 1.2.94 1.483l3.504 1.706a2.488 2.488 0 0 1 1.423 2.242v.73z"
                opacity=".7"
              />
            </svg>
            <p>Artists</p>
          </Item>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.184.1a.402.402 0 0 0-.314-.097L7.519 1.608a.4.4 0 0 0-.347.396V16.249c-.728-.878-1.884-1.449-3.188-1.449C1.787 14.8 0 16.415 0 18.4S1.787 22 3.984 22s3.984-1.615 3.984-3.6c0-.093-.007-.184-.015-.275.005-.026.015-.05.015-.077v-11.6l11.555-1.502v7.303c-.728-.878-1.884-1.449-3.188-1.449-2.197 0-3.984 1.615-3.984 3.6s1.787 3.6 3.984 3.6c2.177 0 3.95-1.586 3.982-3.547l.002-.015V.4a.4.4 0 0 0-.135-.3zm-16.2 21.1c-1.757 0-3.187-1.256-3.187-2.8 0-1.544 1.43-2.8 3.187-2.8 1.758 0 3.188 1.256 3.188 2.8 0 1.544-1.43 2.8-3.188 2.8zm12.351-4c-1.757 0-3.187-1.256-3.187-2.8 0-1.544 1.43-2.8 3.187-2.8 1.758 0 3.188 1.256 3.188 2.8 0 1.544-1.43 2.8-3.188 2.8zM7.968 5.64V2.356L19.523.855v3.284L7.968 5.64z"
                opacity=".7"
              />
            </svg>
            <p>Songs</p>
          </Item>
          <Item>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.45 10.43c.473-.459.64-1.134.436-1.761a1.709 1.709 0 0 0-1.388-1.17l-5.805-.844a.758.758 0 0 1-.57-.415L13.526.98a1.709 1.709 0 0 0-1.541-.957c-.659 0-1.25.367-1.542.958L7.85 6.24a.759.759 0 0 1-.572.415L1.473 7.5a1.707 1.707 0 0 0-1.388 1.17A1.708 1.708 0 0 0 .52 10.43l4.2 4.093a.76.76 0 0 1 .219.672l-.991 5.781c-.112.65.15 1.293.683 1.68a1.705 1.705 0 0 0 1.81.132l5.191-2.73a.76.76 0 0 1 .707 0l5.191 2.73a1.713 1.713 0 0 0 1.81-.131 1.708 1.708 0 0 0 .684-1.681l-.992-5.78a.76.76 0 0 1 .22-.672l4.199-4.094zm-5.363 4.929l.991 5.78a.745.745 0 0 1-.302.743.748.748 0 0 1-.799.058l-5.191-2.73a1.726 1.726 0 0 0-1.6 0l-5.19 2.73a.748.748 0 0 1-.8-.058.746.746 0 0 1-.302-.743l.99-5.78a1.72 1.72 0 0 0-.494-1.522l-4.2-4.093a.744.744 0 0 1-.192-.779.745.745 0 0 1 .613-.517l5.804-.843a1.717 1.717 0 0 0 1.294-.94l2.595-5.26a.745.745 0 0 1 .681-.422c.296 0 .55.157.681.422l2.596 5.26c.25.508.734.859 1.294.94l5.804.843a.745.745 0 0 1 .612.517c.092.281.02.572-.192.779l-4.2 4.093c-.404.395-.59.964-.493 1.522z"
                opacity=".7"
              />
            </svg>
            <p>Genres</p>
          </Item>
        </ItemsList>
      </Section>
      <Section>
        <Title>Playlists</Title>
        <ItemsList>
          {playlists.items &&
            playlists.items.map(playlist => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                style={{ textDecoration: "none" }}
              >
                <Item>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity=".7">
                      <path d="M3.667 0H0v19h22V0H3.667zm-.734 18.27h-2.2V.73h2.2v17.54zm18.334 0h-17.6V.73h17.6v17.54z" />
                      <path d="M7.883 15.712c1.296 0 2.351-.957 2.38-2.142.001-.005.004-.009.004-.014V7.255l6.233-.98v3.474a2.486 2.486 0 0 0-1.65-.613c-1.314 0-2.383.983-2.383 2.192s1.069 2.192 2.383 2.192 2.383-.983 2.383-2.192V3.654a.364.364 0 0 0-.424-.361L9.842 4.389a.366.366 0 0 0-.309.361v7.191a2.486 2.486 0 0 0-1.65-.614c-1.314 0-2.383.983-2.383 2.192 0 1.21 1.07 2.193 2.383 2.193zm6.967-2.924c-.91 0-1.65-.655-1.65-1.461s.74-1.462 1.65-1.462c.91 0 1.65.656 1.65 1.462 0 .806-.74 1.461-1.65 1.461zm-4.583-7.726l6.233-.981v1.453l-6.233.98V5.063zm-2.384 6.996c.91 0 1.65.655 1.65 1.461s-.74 1.462-1.65 1.462c-.91 0-1.65-.656-1.65-1.462 0-.806.74-1.461 1.65-1.461z" />
                    </g>
                  </svg>
                  <p>{playlist.name}</p>
                </Item>
              </Link>
            ))}
        </ItemsList>
      </Section>
    </Container>
  );
};

export default SideBar;
