import React from "react";
import Styled from "./style";

const Navigation = () => {
  return (
    <Styled.Navigation>
      <Styled.List>
        <Styled.Element>
          <Styled.ChatsIcon />
        </Styled.Element>
        <Styled.Element>
          <Styled.PeopleIcon />
        </Styled.Element>
        <Styled.Element>
          <Styled.AvatarIcon />
        </Styled.Element>
      </Styled.List>
    </Styled.Navigation>
  );
};

export default Navigation;
