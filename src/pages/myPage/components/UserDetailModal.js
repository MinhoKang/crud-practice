import React from "react";
import styled from "styled-components";

const UserDetailModal = ({ user, setIsClicked }) => {
  console.log(user);
  return (
    <Container>
      <Content>
        <Title>
          <h3>유저 상세 정보</h3>
        </Title>
        <div>
          <ul>
            <li>유저 아이디: {user?.userId}</li>
            <li>이름: {user?.profile?.name}</li>
            <li>주소: {user?.profile?.address}</li>
            <li>이메일: {user?.email}</li>
            <li>생일: {user?.profile?.birthDate}</li>
            <li>전화번호: {user?.profile?.contact}</li>
            <li>성별: {user?.profile?.gender}</li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default UserDetailModal;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  background-color: rgba(2, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: white;
  width: 50%;
  height: 60%;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;
