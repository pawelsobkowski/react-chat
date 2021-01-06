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

const Contacts = ({ changeView, currentView }) => {
  const history = useHistory();
  const [friends, setFriends] = useState(null);
  const [invitations, setInvitations] = useState(null);
  const { userId } = parseJwt();
  const [isFriendsSectionVisible, setIsFriendsSectionVisible] = useState(true);
  const [
    isInvitationsSectionVisible,
    setIsInvitationsSectionVisible,
  ] = useState(true);

  useEffect(() => {
    fetchFriends(userId).then(setFriends);
    fetchInvitations(userId).then(setInvitations);
  }, [userId]);

  const acceptInvitation = async (id, userId) => {
    const res = await axios.put(`http://localhost:3001/acceptInvitation`, {
      id,
      userId,
    });
    fetchFriends(userId).then(setFriends);
    fetchInvitations(userId).then(setInvitations);
  };

  const denyInvitation = async (id, userId) => {
    const res = await axios.put(`http://localhost:3001/denyInvitation`, {
      id,
      userId,
    });
    fetchFriends(userId).then(setFriends);
    fetchInvitations(userId).then(setInvitations);
  };

  const showFriends = () =>
    friends.length > 0
      ? friends.map((item) => (
          <Styled.ListElement key={item._id}>
            <Avatar photoUrl={item.photoUrl} />
            <Styled.Name>{item.fullName}</Styled.Name>
          </Styled.ListElement>
        ))
      : "No friends";

  const showInvitations = () =>
    invitations.length > 0
      ? invitations.map((item) => (
          <Styled.ListElement key={item._id}>
            <Avatar photoUrl={item.photoUrl} />
            <Styled.Name>{item.fullName}</Styled.Name>
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
      <Header title={"Contacts"} />
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
            {invitations === null ? "Loading..." : showInvitations()}
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
            {friends === null ? "Loading..." : showFriends()}
          </Styled.List>
        )}
      </Styled.Section>

      <Navigation changeView={changeView} currentView={currentView} />
    </Styled.Container>
  );
};

export default Contacts;
