import React from "react";
import styled from "styled-components";
import "../styles.css";

const HeaderWrapper = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>LabeTube</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </HeaderWrapper>
  );
};

export default Header;
