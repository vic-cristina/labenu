import React from "react";
import styled from "styled-components";
import "../styles.css";

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
  border-top: solid 1px #333b3e;
  justify-content: center;
  padding: 1rem;
`;

const StyledImg = styled.img`
  border-radius: 30px;
  height: 2rem;
`;

const UserInfo = ({ userImg, user }) => {
  return (
    <UserInfoWrapper>
      <StyledImg src={userImg} />
      <p>{user}</p>
    </UserInfoWrapper>
  );
};

export default UserInfo;
