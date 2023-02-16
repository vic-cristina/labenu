import axios from "axios";
import React, { useState } from "react";

const CreatePlaylist = ({ getAllPlaylists }) => {
  const [newPlaylist, setNewPlaylist] = useState("");

  const handleNewPlaylist = (e) => {
    setNewPlaylist(e.target.value);
  };

  const headers = {
    headers: {
      Authorization: "victoria-cristina-conway",
    },
  };

  const addNewPlaylist = async () => {
    try {
      await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        { name: newPlaylist },
        headers
      );
      getAllPlaylists();
    } catch (error) {
      console.log(error.response);
    }
    // setPlaylists((previousPlaylists) => {
    //   const preserveLists = [...previousPlaylists];
    //   console.log(preserveLists);
    //   preserveLists.push({
    //     id: String(Math.random() * 10 + 1),
    //     name: newPlaylist,
    //   });
    // });
  };

  return (
    <div>
      <label>
        Nome da playlist:
        <input value={newPlaylist} type="text" onChange={handleNewPlaylist} />
        <button
          onClick={() => {
            addNewPlaylist();
          }}
        >
          Add playlist
        </button>
      </label>
    </div>
  );
};

export default CreatePlaylist;
