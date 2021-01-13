import React from "react";
import Styled from "./style";
import { ChevronLeft } from "react-feather";

const SettingsHeader = ({ title, closeSection, submit }) => {
  return (
    <Styled.Header>
      <Styled.HeaderButton>
        <ChevronLeft onClick={closeSection} />
      </Styled.HeaderButton>
      <Styled.Title>{title && title}</Styled.Title>
      <Styled.ConfirmButton type="button" onClick={submit}>
        Save
      </Styled.ConfirmButton>
    </Styled.Header>
  );
};

export default SettingsHeader;
