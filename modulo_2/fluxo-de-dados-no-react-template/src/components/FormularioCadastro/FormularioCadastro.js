import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = () => {
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");

  const handleChangePicture = (e) => {
    setPicture(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={picture} onChange={handleChangePicture} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            value={description}
            onChange={handleChangeDescription}
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
