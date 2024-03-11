import React from "react";
import { Input, Inputs, Title, Wrapper } from "../components/Common";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import { signUp } from "../apis/signUp";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, onChangeEmail] = useForm();
  const [password, onChangePassword] = useForm();
  const [name, onChangeName] = useForm();
  const [birthday, onChangeBirthday] = useForm();
  const [gender, onChangeGender] = useForm();
  const [isStudent, onChangeIsStudent] = useForm();
  const [phoneNumber, onChangePhoneNumber] = useForm();
  const navigate = useNavigate();
  const onClick = async () => {
    const result = await signUp(
      email,
      password,
      name,
      phoneNumber,
      birthday,
      gender,
      isStudent
    );
    console.log(result);
    navigate("/");
  };
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Inputs>
        <Input
          placeholder="이메일"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <Input
          placeholder="전화번호"
          value={phoneNumber}
          onChange={onChangePhoneNumber}
        />
        <Input placeholder="이름" value={name} onChange={onChangeName} />
        YYYY-MM-dd
        <Input
          placeholder="생일"
          value={birthday}
          onChange={onChangeBirthday}
        />
        male or female
        <Input placeholder="성별" value={gender} onChange={onChangeGender} />
        student or manager
        <Input
          placeholder="직책"
          value={isStudent}
          onChange={onChangeIsStudent}
        />
      </Inputs>
      <Button onClick={onClick}>회원가입</Button>
    </Wrapper>
  );
};

export default Signup;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
