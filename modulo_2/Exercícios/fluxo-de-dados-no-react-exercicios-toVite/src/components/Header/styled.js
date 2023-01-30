import styled from "styled-components";

export const TitleHeader = styled.header`
  font-size: 32px;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 8vh;
  padding: 2rem;

  h1 {
    font-size: 3rem;
  }

  img {
    border-radius: 9999%;
    width: 50px;
    height: 50px;
  }
`;

export const UserDisplayWrapper = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  gap: 1rem;
  flex-direction: row;
  object-fit: cover;
  flex-wrap: wrap;
`;
