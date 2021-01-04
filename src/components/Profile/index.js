import React, { useEffect } from "react";
import Avatar from "../../parts/Avatar";
import Styled from "../Profile/style";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Profile</Styled.Title>
        <Styled.Close onClick={goBack}>Done</Styled.Close>
      </Styled.Header>
      <Avatar
        photoUrl={"https://source.unsplash.com/128x128/?people"}
        size={128}
      />
      <Styled.Name>Joe Johnson</Styled.Name>
      <Styled.List>
        <Styled.SectionTitle>Account</Styled.SectionTitle>
        <Styled.ListElement>
          <Styled.PersonIcon />
          <Styled.Option>Personal info</Styled.Option>
          <Styled.ChevronRightIcon />
        </Styled.ListElement>
        <Styled.ListElement>
          <Styled.LockIcon />
          <Styled.Option>Password</Styled.Option>
          <Styled.ChevronRightIcon />
        </Styled.ListElement>
        <Styled.ListElement>
          <Styled.DeleteIcon />
          <Styled.Option>Delete Account</Styled.Option>
          <Styled.ChevronRightIcon />
        </Styled.ListElement>
        <Styled.ListElement onClick={logout}>
          <Styled.LogOutIcon />
          <Styled.Option>Logout</Styled.Option>
          <Styled.ChevronRightIcon />
        </Styled.ListElement>
      </Styled.List>
    </Styled.Container>
  );
};

export default Profile;
