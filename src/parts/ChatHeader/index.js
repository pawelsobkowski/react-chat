import React from "react";
import Styled from "./style";
import { MoreVertical, ChevronLeft } from "react-feather";

const ChatHeader = ({ title, closeChat }) => {
  return (
    <Styled.Header>
      <Styled.HeaderButton>
        <ChevronLeft onClick={closeChat} />
      </Styled.HeaderButton>
      <Styled.Title>{title && title}</Styled.Title>
      <Styled.HeaderButton>
        <MoreVertical />
      </Styled.HeaderButton>
    </Styled.Header>
  );
};

export default ChatHeader;
