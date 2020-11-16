import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Styled from "./style";
import Header from "../../parts/Header";
import Navigation from "../../parts/Navigation";
import Avatar from "../../parts/Avatar";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";
import { ChevronDown, ChevronUp } from "react-feather";

const fetchFriends = async (userId) => {
  const res = await axios.get(`http://localhost:3001/users/${userId}`);
  return res.data.friends;
};
const fetchInvitations = async (userId) => {
  const res = await axios.get(`http://localhost:3001/users/${userId}`);
  return res.data.invitations;
};

const Contacts = () => {
  const history = useHistory();
  const [users, setUsers] = useState(null);
  const [invitations, setInvitations] = useState([]);
  const { userId } = parseJwt();
  const [isFriendsSectionVisible, setIsFriendsSectionVisible] = useState(true);
  const [
    isInvitationsSectionVisible,
    setIsInvitationsSectionVisible,
  ] = useState(true);

  useEffect(() => {
    fetchFriends(userId).then(setUsers);
    fetchInvitations(userId).then(setInvitations);
  }, [userId]);

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const acceptInvitation = async (id, userId) => {
    const res = await axios.put(`http://localhost:3001/acceptInvitation`, {
      id,
      userId,
    });
    fetchFriends(userId).then(setUsers);
    fetchInvitations(userId).then(setInvitations);
  };

  const denyInvitation = async (id, userId) => {
    const res = await axios.put(`http://localhost:3001/denyInvitation`, {
      id,
      userId,
    });
    fetchFriends(userId).then(setUsers);
    fetchInvitations(userId).then(setInvitations);
  };

  const showFriends = () =>
    users.length > 0
      ? users.map((item) => (
          <Styled.ListElement key={item._id}>
            <Avatar photoUrl={item.photoUrl} />
            {item.fullName}
          </Styled.ListElement>
        ))
      : "Lack of messages";

  const showInvitations = () =>
    invitations.length > 0
      ? invitations.map((item) => (
          <Styled.ListElement key={item._id}>
            <Avatar photoUrl={item.photoUrl} />
            {item.fullName}
            <Styled.AcceptIcon
              onClick={() => acceptInvitation(item._id, userId)}
            />
            <Styled.CancelIcon
              onClick={() => denyInvitation(item._id, userId)}
            />
          </Styled.ListElement>
        ))
      : "No invitations";
  return (
    <Styled.Container>
      <Header title={"Contacts"} logout={logout} />
      <Styled.Section>
        <Styled.SectionHeader
          onClick={() =>
            setIsInvitationsSectionVisible(!isInvitationsSectionVisible)
          }>
          <Styled.SectionHeaderTitle>Invitations</Styled.SectionHeaderTitle>
          {isInvitationsSectionVisible ? <ChevronUp /> : <ChevronDown />}
        </Styled.SectionHeader>
        {isInvitationsSectionVisible && (
          <Styled.List>
            {users === null ? "Loading..." : showInvitations()}
          </Styled.List>
        )}
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionHeader
          onClick={() => setIsFriendsSectionVisible(!isFriendsSectionVisible)}>
          <Styled.SectionHeaderTitle>Friends</Styled.SectionHeaderTitle>
          {isFriendsSectionVisible ? <ChevronUp /> : <ChevronDown />}
        </Styled.SectionHeader>
        {isFriendsSectionVisible && (
          <Styled.List>
            {users === null ? "Loading..." : showFriends()}
          </Styled.List>
        )}
      </Styled.Section>

      <Navigation />
    </Styled.Container>
  );
};

export default Contacts;
