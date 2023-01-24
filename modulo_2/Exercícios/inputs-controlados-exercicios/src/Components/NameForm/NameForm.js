import React from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = (props) => {
  return (
    <Form>
      <label>
        Nome:
        <Input
          placeholder="Nome"
          type="text"
          value={props.name}
          required={true}
          onChange={props.onChangeName}
        />
      </label>
      <label>
        Idade:
        <Input
          placeholder="Idade"
          type="number"
          value={props.age}
          required={true}
          onChange={props.onChangeAge}
        />
      </label>
      <label>
        E-mail:
        <Input
          placeholder="usuario@usuario.com"
          type="email"
          value={props.email}
          required={true}
          onChange={props.onChangeEmail}
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          type="email"
          value={props.email}
          required={true}
          onChange={props.onChangeEmail}
        />
      </label>
      <button onClick={props.onSendData}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;
