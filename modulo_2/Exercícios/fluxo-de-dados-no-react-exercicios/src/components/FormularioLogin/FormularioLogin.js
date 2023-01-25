import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({
  userInfo,
  onSetPageFlow,
  onSetUserInfo,
  onSetUserDisplay,
}) => {
  const login = () => {
    console.log(userInfo);
    postUserData();
    setTimeout(() => {
      onSetPageFlow(2);
    }, 2500);
  };

  const postUserData = () => {
    onSetUserDisplay(userInfo);
  };

  // const handleChangeName_OLD = (e) => {
  //   onSetUserInfo(...userInfo, userInfo.set());
  // };

  const handleChangeName = (e) => {
    onSetUserInfo(userInfo.set("username", e.target.value));
  };

  const handleChangeImgUrl = (e) => {
    onSetUserInfo(userInfo.set("imgUrl", e.target.value));
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={handleChangeName} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange={handleChangeImgUrl} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
