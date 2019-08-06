import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
  border: 3px solid dodgerblue;
  width: 150px;
  text-align: center;
  padding: 10px;
`;

const UserImg = styled.img`
  width: 30%;
`;

function UserCard(props) {
  console.log(props);
  return (
    <UserDiv>
      <UserImg src={`${props.userData.avatar_url}`} alt='avatar' />
      <p>{props.userData.login}</p>
      <div>ID: {props.userData.id}</div>
      <div>Followers: {props.userData.followers}</div>
      <div>Following: {props.userData.following}</div>
    </UserDiv>
  );
};

export default UserCard;
