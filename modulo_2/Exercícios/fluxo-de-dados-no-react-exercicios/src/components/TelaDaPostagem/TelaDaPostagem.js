import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({ postDisplay }) => {
  return (
    <ContainerPostagem>
      <TitleHeader>{postDisplay.get("title")}</TitleHeader>
      <Image src={postDisplay.get("imgUrl")} />
      <Description>{postDisplay.get("post")}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
