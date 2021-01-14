import React from "react";
import Styled from "./style";

const ConfirmDialog = ({ text, closeDialog, action }) => {
  return (
    <Styled.Container>
      <Styled.Content>{text}</Styled.Content>
      <Styled.Actions>
        <Styled.Button onClick={closeDialog}>Cancel</Styled.Button>
        <Styled.ConfirmButton onClick={action}>Delete</Styled.ConfirmButton>
      </Styled.Actions>
    </Styled.Container>
  );
};

export default ConfirmDialog;
