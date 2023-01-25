import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioPostagem = ({
  postInfo,
  onSetPostInfo,
  onSetPostDisplay,
}) => {
  const getPost = () => {
    onSetPostDisplay(postInfo);
  };

  const handleTitleChange = (e) => {
    onSetPostInfo(postInfo.set("title", e.target.value));
  };
  const handlePictureChange = (e) => {
    onSetPostInfo(postInfo.set("imgUrl", e.target.value));
  };
  const handlePostChange = (e) => {
    onSetPostInfo(postInfo.set("post", e.target.value));
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={handleTitleChange} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={handlePictureChange} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={handlePostChange} />
        </StyledLabel>
        <SendButton
          onClick={(e) => {
            e.preventDefault();
            getPost();
          }}
        >
          Send!
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioPostagem;
