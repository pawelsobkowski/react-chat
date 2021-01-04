import React from "react";
import Styled from "./style";

const Avatar = ({ photoUrl, size }) => {
  return photoUrl !== "" ? (
    <Styled.Img src={photoUrl} alt="Avatar" size={size && size} />
  ) : (
    <Styled.UserIcon />
  );
};

export default Avatar;
