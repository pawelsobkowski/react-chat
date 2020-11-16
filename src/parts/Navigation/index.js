import React from "react";
import Styled from "./style";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Styled.Navigation>
      <Styled.List>
        <Styled.Element>
          <NavLink to="/chats">
            <Styled.ChatsIcon />
          </NavLink>
        </Styled.Element>
        <Styled.Element>
          <NavLink to="/contacts">
            <Styled.PeopleIcon />
          </NavLink>
        </Styled.Element>
        <Styled.Element>
          <NavLink to="/profile">
            <Styled.AvatarIcon />
          </NavLink>
        </Styled.Element>
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
