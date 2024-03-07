import React, { useState } from "react";
import styled from "styled-components";
import UserDetailModal from "./UserDetailModal";

const UserCard = ({ user }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Container>
      <ul key={user?.userId}>
        <li>유저 아이디: {user?.userId}</li>
        <li>이름: {user?.profile?.name}</li>
        <li>주소: {user?.profile?.address}</li>
        <li>이메일: {user?.email}</li>
        <li>생일: {user?.profile?.birthDate}</li>
        <li>전화번호: {user?.profile?.contact}</li>
        <li>성별: {user?.profile?.gender === "male" ? "남자" : "여자"}</li>
        <li>등록일: {user?.profile?.registerDate}</li>
        <li>직책: {user?.profile?.type === "manager" ? "매니저" : "학생"}</li>
      </ul>
      <Button
        user={user}
        onClick={() => {
          setIsClicked(true);
        }}
      >
        유저 정보 수정
      </Button>
      {isClicked && <UserDetailModal user={user} setIsClicked={setIsClicked} />}
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  position: relative;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  width: 150px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  &:hover {
    background-color: aliceblue;
    color: black;
  }
`;
