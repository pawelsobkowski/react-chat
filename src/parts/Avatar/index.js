import React, { useState } from "react";
import Styled from "./style";

const Avatar = ({ photoUrl, size }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {photoUrl !== "" ? (
        <Styled.Img
          src={photoUrl}
          alt="Avatar"
          size={size && size}
          isLoaded={isLoaded}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      ) : (
        <Styled.UserIcon size={size && size} />
      )}
      {!isLoaded && photoUrl && <Styled.UserIcon size={size && size} />}
    </>
  );
};

export default Avatar;
