import React from "react";
import Styled from "./style";
import { MoreVertical, ChevronLeft } from "react-feather";
import { useHistory } from "react-router-dom";

const ChatHeader = ({ title }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Styled.Header>
      <Styled.HeaderButton>
        <ChevronLeft onClick={goBack} />
      </Styled.HeaderButton>
      <Styled.Title>{title && title}</Styled.Title>
      <Styled.HeaderButton>
        <MoreVertical />
      </Styled.HeaderButton>
    </Styled.Header>
  );
};

export default ChatHeader;
