import React from "react";
import Styled from "./style";

const Navigation = ({ changeView, currentView }) => {
  return (
    <Styled.Navigation>
      <Styled.List>
        <Styled.Element onClick={() => changeView("chats")}>
          <Styled.ChatsIcon currentView={currentView === "chats"} />
        </Styled.Element>
        <Styled.Element onClick={() => changeView("contacts")}>
          <Styled.PeopleIcon currentView={currentView === "contacts"} />
        </Styled.Element>
        <Styled.Element onClick={() => changeView("profile")}>
          <Styled.AvatarIcon />
        </Styled.Element>
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
