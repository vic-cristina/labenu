import React from "react";
import "./index.css";

export const MediaGrid = () => {
  const playVideo = () => {
    alert("oi");
  };

  return (
    <div>
      <section className="painel-de-videos">
        <div className="box-pagina-principal media1" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media2" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media3" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media4" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media5" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media6" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media7" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
        <div className="box-pagina-principal media8" onClick={playVideo}>
          <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
          <h4>Título do vídeo</h4>
        </div>
      </section>
    </div>
  );
};
