import React, { useState } from "react";
import { Form, Input } from "../MainPage/styles";
import validator from "validator";

const ConfirmationForm = ({ onSetFormFlow }) => {
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("+55629XXXXXXXX");
  const [ethnicity, setEthnicity] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEthnicityChange = (event) => {
    setEthnicity(event.target.value);
  };

  const sendData = () => {
    console.log(date, phoneNumber, ethnicity);

    if (validator.isDate(date)) {
      setError(null);
    } else {
      setError("Insira uma data válida!");
    }
    if (validator.isMobilePhone(phoneNumber)) {
      setError(null);
    } else {
      setError("Insira um telefone valido");
    }
    if (!ethnicity) {
      setError(null);
    } else {
      setError("Preencha o campo etnia");
    }

    validator.isDate(date) &&
    validator.isMobilePhone(phoneNumber) &&
    ethnicity !== null
      ? onSetFormFlow(1)
      : setError("Tente novamente");
  };

  return (
    <Form>
      <label>Data de nascimento: </label>
      <Input type="date" value={date} onChange={handleDateChange} />
      <label>Telefone: </label>
      <Input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <label>Etnia: </label>
      <select id="etnia" name="etnia" onChange={handleEthnicityChange}>
        <option value="negro">Negro</option>
        <option value="branco">Branco</option>
        <option value="pardo">Pardo</option>
        <option value="amarelo">Amarelo</option>
        <option value="indígena">Indígena</option>
        <option value="prefiro não dizer">Prefiro não dizer</option>
      </select>
      <button onClick={sendData}>Enviar dados</button>
      {error && <h2 style={{ color: "orange" }}>{error}</h2>}
    </Form>
  );
};

export default ConfirmationForm;
