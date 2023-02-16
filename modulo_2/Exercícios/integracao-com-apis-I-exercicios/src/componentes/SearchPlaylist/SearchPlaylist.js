import React, { useState } from "react";

const SearchPlaylist = () => {
  const [searchPlaylist, setSearchPlaylist] = useState("");

  return (
    <div>
      <label>
        Nome da playlist:
        <input
          value={searchPlaylist}
          type="text"
          onChange={(e) => setSearchPlaylist(e.target.value)}
        />
        <button
          onClick={(e) => {
            setSearchPlaylist(e.target);
          }}
        >
          Add playlist
        </button>
      </label>
    </div>
  );
};

export default SearchPlaylist;
