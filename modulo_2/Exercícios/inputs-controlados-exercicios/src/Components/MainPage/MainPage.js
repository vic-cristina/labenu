import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [formFlow, setFormFlow] = useState(1);
  // const [error, setError] = useState(null);
  //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSendData = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (isValidEmail === false) {
      setError("Por favor, insira um e-mail válido");
    }
    console.log(email, isValidEmail);
    if (age < 18) {
      setError("Você precisa ser maior de idade para entrar na Labenu");
    }
    if (name.length < 10 || name.length > 30) {
      setError("Seu nome está fora do limite de caracteres suportado");
    }
    if (age >= 18 && name.length > 10 && name.length < 30 && isValidEmail) {
      setError(null);
      setFormFlow(2);
    }
  };
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          name={name}
          age={age}
          email={email}
          onChangeName={handleChangeName}
          onChangeAge={handleChangeAge}
          onChangeEmail={handleChangeEmail}
          onSendData={handleSendData}
        />
      ) : (
        <ConfirmationForm onSetFormFlow={setFormFlow} />
      )}
      {error && <h2 style={{ color: "orange" }}>{error}</h2>}
    </MainContainer>
  );
};

export default MainPage;
