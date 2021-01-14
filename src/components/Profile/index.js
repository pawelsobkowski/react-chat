import React, { useEffect, useState } from "react";
import Avatar from "../../parts/Avatar";
import Styled from "../Profile/style";
import { useHistory } from "react-router-dom";
import parseJwt from "../../functions/parseJWT";
import axios from "axios";
import PersonalInfoForm from "../PersonalInfoForm";
import PasswordForm from "../PasswordForm";
import ConfirmDialog from "../../parts/ConfirmDialog";

const fetchData = async (userId) => {
  const res = await axios.get(`http://localhost:3001/users/${userId}`);
  return res.data.fullName;
};

const deleteUser = async (userId, logout) => {
  const res = await axios.delete(`http://localhost:3001/users/${userId}`);
  logout();
  console.log(res);
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
        <Styled.ListElement
          onClick={() => setSettingsView({ name: "delete", isActive: true })}>
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
      {settingsView.name === "delete" && settingsView.isActive && (
        <ConfirmDialog
          text={"Are you sure, you want to delete this account?"}
          closeDialog={() => setSettingsView({ name: "", isActive: false })}
          action={() => deleteUser(userId, logout)}
        />
      )}
    </Styled.Container>
  );
};

export default Profile;
