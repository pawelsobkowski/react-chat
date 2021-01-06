import React from "react";
import Styled from "./style";

const Navigation = ({ changeView }) => {
  return (
    <Styled.Navigation>
      <Styled.List>
        <Styled.Element onClick={() => changeView("chats")}>
          <Styled.ChatsIcon />
        </Styled.Element>
        <Styled.Element onClick={() => changeView("contacts")}>
          <Styled.PeopleIcon />
        </Styled.Element>
        <Styled.Element onClick={() => changeView("profile")}>
          <Styled.AvatarIcon />
        </Styled.Element>
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
