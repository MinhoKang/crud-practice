import React, { useEffect, useState } from "react";
import { Form, Input, Inputs, Title, Wrapper } from "../components/Common";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../apis/login";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClick = async () => {
    const result = await login(email, password);
    const { accessToken, refreshToken, type, email: userEmail } = result;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("type", type);
    console.log("login token", accessToken);
    navigate("/mypage");
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input placeholder="이메일" value={email} onChange={onChangeEmail} />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </Inputs>
        <Button onClick={onClick}>로그인</Button>
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-top: 10px;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
