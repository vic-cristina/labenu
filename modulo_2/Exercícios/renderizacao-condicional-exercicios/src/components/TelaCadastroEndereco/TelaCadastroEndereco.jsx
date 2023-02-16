import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled";

import React from "react";

const TelaCadastroEndereco = (props) => {
  <FormContainer>
    <Form>
      <StyledLabel>
        Endereço:
        <Input />
      </StyledLabel>{" "}
      <StyledLabel>
        Número:
        <Input />
      </StyledLabel>{" "}
      <StyledLabel>
        Telefone:
        <Input />
      </StyledLabel>{" "}
      <StyledLabel>
        Complemento:
        <Input />
      </StyledLabel>
      <SendButton onClick={() => props.mudarTela(4)}>Enviar</SendButton>
    </Form>
  </FormContainer>;
};

export default TelaCadastroEndereco;
