import styled from "styled-components";

export const TitleHeader = styled.header`
  font-size: 32px;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 8vh;
  padding: 2rem;
  border-radius: 30px;

  h1 {
    font-size: 1rem;
  }

  img {
    display: block;
    border-radius: 9999%;
    max-width: 50px;
    max-height: 50px;
    width: auto;
    height: auto;
  }
`;

export const UserDisplayWrapper = styled.div`
  border: solid black 1px;
  display: flex;
  width: 20rem;
  height: 5rem;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  object-fit: contain;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
