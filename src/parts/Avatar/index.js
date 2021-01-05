import React, { useState } from "react";
import Styled from "./style";

const Avatar = ({ photoUrl, size }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Styled.Img
        src={photoUrl}
        alt="Avatar"
        size={size && size}
        isLoaded={isLoaded}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      {!isLoaded && <Styled.UserIcon size={size && size} />}
    </>
  );
};

export default Avatar;
