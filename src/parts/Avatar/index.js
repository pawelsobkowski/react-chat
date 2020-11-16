import React from "react";
import Styled from "./style";

const Avatar = ({ photoUrl }) => {
  return photoUrl !== "" ? (
    <Styled.Img src={photoUrl} alt="Avatar" />
  ) : (
    <Styled.UserIcon />
  );
};

export default Avatar;
