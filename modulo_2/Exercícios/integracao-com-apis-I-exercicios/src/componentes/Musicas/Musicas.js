import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Botao,
  ContainerInputs,
  ContainerMusicas,
  InputMusica,
  Musica,
} from "./styled";

const musicasLocal = [
  {
    artist: "Artista 1",
    id: "1",
    name: "Musica1",
    url: "http://spoti4.future4.com.br/1.mp3",
  },
  {
    artist: "Artista 2",
    id: "2",
    name: "Musica2",
    url: "http://spoti4.future4.com.br/2.mp3",
  },
  {
    artist: "Artista 3",
    id: "3",
    name: "Musica3",
    url: "http://spoti4.future4.com.br/3.mp3",
  },
];

export default function Musicas(props) {
  const [musicas, setMusicas] = useState([]);
  const [artist, setArtist] = useState("");
  const [track, setTrack] = useState("");
  const [url, setUrl] = useState("");

  const body = {
    name: track,
    artist: artist,
    url: url,
  };

  const getPlaylistTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`,
        props.headers
      )
      .then((res) => {
        const musicArray = res.data.result.tracks;
        setMusicas(musicArray);
        console.log(musicArray);
        console.log(musicas);
      });
  };

  const addTrackToPlaylist = (playlistId) => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        props.headers
      )
      .then((res) => {
        props.getAllPlaylists();
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleArtist = (e) => {
    setArtist(e.target.value);
  };
  const handleTrack = (e) => {
    setTrack(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    getPlaylistTracks();
  }, []);

  return (
    <ContainerMusicas>
      <h2>{props.playlist.name}</h2>
      {musicas.map((musica) => {
        return (
          <Musica key={musica.id}>
            <h3>
              {musica.name} - {musica.artist}
            </h3>
            <audio src={musica.url} controls />
            <button>X</button>
          </Musica>
        );
      })}
      <ContainerInputs>
        <InputMusica placeholder="artista" onChange={handleArtist} />
        <InputMusica placeholder="musica" onChange={handleTrack} />
        <InputMusica placeholder="url" onChange={handleUrl} />
        <Botao onClick={() => addTrackToPlaylist(props.playlist.id)}>
          Adicionar musica
        </Botao>
      </ContainerInputs>
    </ContainerMusicas>
  );
}
