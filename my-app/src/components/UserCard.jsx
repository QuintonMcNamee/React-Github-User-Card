import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
`;

const UserDiv = styled.div`
  border: 3px solid dodgerblue;
  width: 150px;
  text-align: center;
  padding: 10px;
  box-shadow: 2px 2px 8px gray;
`;

const UserImg = styled.img`
  width: 30%;
`;

function UserCard(props) {
  console.log(props);
  return (
    <ContainerDiv>
      <UserDiv>
        <UserImg src={`${props.userData.avatar_url}`} alt='avatar' />
        <p>{props.userData.login}</p>
        <div>ID: {props.userData.id}</div>
        <div>Followers: {props.userData.followers}</div>
        <div>Following: {props.userData.following}</div>
      </UserDiv>
      {props.userFollowers.map(user => (
        <UserDiv key={user.id}>
          <UserImg src={`${user.avatar_url}`} alt='avatar' />
          <p>{user.login}</p>
          <div>ID: {user.id}</div>
        </UserDiv>
      ))}
    </ContainerDiv>
  );
};

export default UserCard;
