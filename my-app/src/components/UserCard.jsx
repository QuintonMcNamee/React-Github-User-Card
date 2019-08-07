import React from 'react';
import styled from 'styled-components';

const ContainerDivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserDiv = styled.div`
  border: 3px solid dodgerblue;
  width: 150px;
  text-align: center;
  padding: 10px;
  box-shadow: 2px 2px 8px gray;
  margin: 10px;
`;

const UserH1 = styled.h1`
  margin: 10px;
`;

const UserImg = styled.img`
  width: 30%;
`;

function UserCard(props) {
  console.log(props);
  return (
    <>
      <UserH1>Me</UserH1>
      <UserDiv>
        <UserImg src={`${props.userData.avatar_url}`} alt='avatar' />
        <p>{props.userData.login}</p>
        <div>ID: {props.userData.id}</div>
        <div>Followers: {props.userData.followers}</div>
        <div>Following: {props.userData.following}</div>
      </UserDiv>
      <br />
      <UserH1>My Followers</UserH1>
      <ContainerDivFlex>
        {props.userFollowers.map(user => (
          <UserDiv key={user.id}>
            <UserImg src={`${user.avatar_url}`} alt='avatar' />
            <p>{user.login}</p>
            <div>ID: {user.id}</div>
          </UserDiv>
        ))}
      </ContainerDivFlex>
      <br />
      <UserH1>My Repos</UserH1>
      <ContainerDivFlex>
        {props.userRepos.map(user => (
          <UserDiv key={user.id}>
            <div>Repo name: <br /> {user.name}</div>
          </UserDiv>
        ))}
      </ContainerDivFlex>
    </>
  );
};

export default UserCard;
