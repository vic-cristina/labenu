import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
  border-radius: 30px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 30px;
    object-fit: cover;
  }
`;

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  return (
    <div>
      <CardWrapper onClick={reproduzVideo}>
        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <UserInfo user={props.user} userImg={props.userImg} />
      </CardWrapper>
    </div>
  );
}
