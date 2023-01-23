import React from "react";

const CardVideo = (props) => {
  const titulo = "Título do vídeo";

  const renderCards = () => {
    let cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(
        <div className="box-pagina-principal" onClick={props.onPlayVideo}>
          <img src="https://picsum.photos/400/400?a=1 " alt="" />
          <h4>{titulo}</h4>
        </div>
      );
    }
  };

  return <section className="painel-de-videos">{}</section>;
};

export default CardVideo;
