import React, { useEffect, useState } from "react";
import Avatar from "../../parts/Avatar";
import Styled from "../Profile/style";
import { useHistory } from "react-router-dom";
import parseJwt from "../../functions/parseJWT";
import axios from "axios";
import PersonalInfoForm from "../PersonalInfoForm";
import PasswordForm from "../PasswordForm";

const fetchData = async (userId) => {
  const res = await axios.get(`http://localhost:3001/users/${userId}`);
  return res.data.fullName;
};

const Profile = ({ changeView }) => {
  const history = useHistory();
  const { userId } = parseJwt();
  const [name, setName] = useState("");
  const [settingsView, setSettingsView] = useState({
    name: "",
    isActive: false,
  });

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  useEffect(() => {
    fetchData(userId).then(setName);
  }, [userId]);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Profile</Styled.Title>
        <Styled.Close onClick={() => changeView("chats")}>Done</Styled.Close>
      </Styled.Header>
      <Avatar
        photoUrl={"https://source.unsplash.com/128x128/?people"}
        size={128}
      />
      <Styled.Name>{name && name}</Styled.Name>
      <Styled.List>
        <Styled.SectionTitle>Account</Styled.SectionTitle>
        <Styled.ListElement
          onClick={() =>
            setSettingsView({ name: "personalInfo", isActive: true })
          }>
          <Styled.PersonIcon />
          <Styled.Option>Personal info</Styled.Option>
          <Styled.ChevronRightIcon />
        </Styled.ListElement>
        <Styled.ListElement
          onClick={() => setSettingsView({ name: "password", isActive: true })}>
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
      {settingsView.name === "personalInfo" && settingsView.isActive && (
        <PersonalInfoForm
          closeSection={() => setSettingsView({ name: "", isActive: false })}
        />
      )}
      {settingsView.name === "password" && settingsView.isActive && (
        <PasswordForm
          closeSection={() => setSettingsView({ name: "", isActive: false })}
        />
      )}
    </Styled.Container>
  );
};

export default Profile;
