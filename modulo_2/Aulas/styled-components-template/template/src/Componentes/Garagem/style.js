import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: orangered;
  padding: 5px;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
  flex: 50%;
  width: 100vw;
`;

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 10px;
  padding: 10px;
  background-image: linear-gradient(to right, gray, black, gray);

  li {
    list-style: none;
  }
`;
