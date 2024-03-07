import React from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
  return (
    <Container>
      <ul>
        <li>유저 아이디: {user.profile.id}</li>
        <li>이름: {user.profile.name}</li>
        <li>주소: {user.profile.address}</li>
        <li>이메일: {user.email}</li>
        <li>생일: {user.profile.birthdate}</li>
        <li>전화번호: {user.profile.contact}</li>
        <li>성별: {user.profile.gender === "male" ? "남자" : "여자"}</li>
        <li>등록일: {user.profile.registerDate}</li>
        <li>직책: {user.profile.type === "manager" ? "매니저" : "학생"}</li>
      </ul>
      <Button user={user}>유저 정보 수정</Button>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: black;
  color: white;
  width: 150px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  &:hover {
    background-color: aliceblue;
    color: black;
  }
`;
