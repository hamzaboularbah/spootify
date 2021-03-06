import React, { useState, useEffect } from "react";

const Like = ({ trackId }) => {
  const [Liked, setLiked] = useState(false);
  useEffect(() => {
    const LikedSongs = JSON.parse(localStorage.getItem("liked-songs"));
    if (LikedSongs && LikedSongs.includes(trackId)) setLiked(true);
  }, [trackId]);

  const handleTrackLike = () => {
    let LikedSongs = localStorage.getItem("liked-songs");
    if (!LikedSongs) LikedSongs = [];
    else LikedSongs = JSON.parse(LikedSongs);
    if (LikedSongs.includes(trackId)) {
      localStorage.setItem(
        "liked-songs",
        JSON.stringify(LikedSongs.filter(id => id !== trackId))
      );
      setLiked(false);
    } else {
      LikedSongs.push(trackId);
      localStorage.setItem("liked-songs", JSON.stringify(LikedSongs));
      setLiked(true);
    }
  };
  return (
    <>
      {Liked ? (
        <svg
          style={{ cursor: "pointer" }}
          onClick={handleTrackLike}
          width="18"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.572 1.564A4.845 4.845 0 0012.972 0c-1.04 0-1.99.328-2.829.974A5.78 5.78 0 009 2.166 5.777 5.777 0 007.856.974 4.533 4.533 0 005.028 0c-1.39 0-2.668.556-3.6 1.564C.508 2.561 0 3.923 0 5.4c0 1.52.567 2.91 1.785 4.377 1.09 1.312 2.656 2.644 4.47 4.186.618.527 1.32 1.124 2.05 1.76a1.057 1.057 0 001.39 0c.73-.636 1.432-1.233 2.051-1.76 1.813-1.542 3.38-2.874 4.469-4.186C17.433 8.309 18 6.918 18 5.399c0-1.476-.507-2.838-1.428-3.835z"
            fill="#1DE9B6"
          />
        </svg>
      ) : (
        <svg
          style={{ cursor: "pointer" }}
          onClick={handleTrackLike}
          width="18"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 15.983c-.256 0-.503-.093-.696-.261a208.49 208.49 0 0 0-2.047-1.757l-.003-.003c-1.813-1.542-3.38-2.874-4.469-4.186C.567 8.309 0 6.918 0 5.399c0-1.476.507-2.838 1.428-3.835A4.845 4.845 0 0 1 5.028 0c1.04 0 1.991.328 2.829.974A5.78 5.78 0 0 1 9 2.166 5.78 5.78 0 0 1 10.144.974 4.533 4.533 0 0 1 12.972 0c1.39 0 2.668.556 3.6 1.564C17.493 2.561 18 3.923 18 5.4c0 1.52-.567 2.91-1.785 4.377-1.09 1.312-2.656 2.644-4.469 4.186-.62.527-1.321 1.124-2.05 1.76-.193.168-.44.261-.696.261zM5.028 1.053a3.8 3.8 0 0 0-2.825 1.224c-.74.802-1.149 1.91-1.149 3.122 0 1.278.476 2.42 1.543 3.705 1.031 1.242 2.565 2.547 4.341 4.057l.003.003c.621.528 1.325 1.127 2.057 1.766.737-.64 1.442-1.24 2.064-1.769 1.776-1.51 3.31-2.815 4.341-4.057C16.47 7.82 16.946 6.677 16.946 5.4c0-1.211-.408-2.32-1.149-3.122a3.8 3.8 0 0 0-2.825-1.225c-.8 0-1.535.254-2.184.755-.578.446-.98 1.01-1.216 1.405A.66.66 0 0 1 9 3.536a.66.66 0 0 1-.572-.324c-.236-.395-.638-.959-1.216-1.405a3.501 3.501 0 0 0-2.184-.755z"
            fill={Liked ? "#1DE9B6" : "#51596D"}
            opacity=".6"
          />
        </svg>
      )}
    </>
  );
};

export default Like;
