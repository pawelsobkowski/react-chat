import React, { useEffect, useState } from "react";
import Styled from "./style";
import Avatar from "../Avatar";
import axios from "axios";
import parseJwt from "../../functions/parseJWT";
import { UserPlus, UserMinus } from "react-feather";

const fetchUserRequests = async (userId) => {
  const res = await axios.get(`http://localhost:3001/users/${userId}`);
  return res.data.requests;
};

const Search = ({ results }) => {
  const { userId } = parseJwt();
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    fetchUserRequests(userId).then(setUserRequests);
  }, [userId]);

  const sendInvitation = async (id, userId) => {
    const res = await axios.put(`http://localhost:3001/sendInvitation`, {
      id,
      userId,
    });
    console.log(res);
    fetchUserRequests(userId).then(setUserRequests);
  };

  const cancelInvitation = async (id, userId) => {
    const res = await axios.put(`http://localhost:3001/cancelInvitation`, {
      id,
      userId,
    });
    console.log(res);
    fetchUserRequests(userId).then(setUserRequests);
  };

  const isContainsId = (id) => userRequests.includes(id);

  const showResults = () =>
    results.length > 0
      ? results.map((item) => (
          <Styled.ListElement key={item._id}>
            <Avatar photoUrl={item.photoUrl} />
            {item.fullName}
            {!item.isFriend &&
              (isContainsId(item._id) ? (
                <Styled.Button
                  onClick={() => cancelInvitation(item._id, userId)}>
                  <UserMinus />
                </Styled.Button>
              ) : (
                <Styled.Button onClick={() => sendInvitation(item._id, userId)}>
                  <UserPlus />
                </Styled.Button>
              ))}
          </Styled.ListElement>
        ))
      : "No results";

  return (
    <Styled.SearchContainer>
      <Styled.List>{results && showResults()}</Styled.List>
    </Styled.SearchContainer>
  );
};

export default Search;
