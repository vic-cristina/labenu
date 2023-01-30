import { TitleHeader, UserDisplayWrapper } from "./styled";

export const Header = ({ userDisplay }) => {
  return (
    <TitleHeader>
      Insta4
      <UserDisplayWrapper>
        <img src={userDisplay.get("imgUrl")} alt="" />
        <h1>{userDisplay.get("username")}</h1>
      </UserDisplayWrapper>
    </TitleHeader>
  );
};
