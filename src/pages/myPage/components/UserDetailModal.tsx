import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserInfo } from "../../../apis/userInfo";
import { editInfo } from "../../../apis/editInfo";

const UserDetailModal = ({ user, setIsClicked }) => {
  const [userInfo, setUserInfo] = useState({});

  // 유저 정보 불러오기
  let accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    getUserInfo(user?.userId, accessToken)
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }, []);

  // 유저 정보 수정하기
  // useEffect(() => {
  //   editInfo(user?.userId, accessToken, { ...userInfo })
  //     .then((data) => {
  //       console.log("qqqqqq", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred:", error);
  //     });
  // }, []);

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    const updatedUserInfo = {
      ...userInfo,
      isActive: isActive,
      profile: {
        ...userInfo.profile,
        name: name,
        address: address,
        birthDate: birthDate,
        contact: contact,
        gender: gender,
      },
      email: email,
    };
    console.log("updatedUserInfo", updatedUserInfo);
    editInfo(user?.userId, accessToken, updatedUserInfo)
      .then((data) => {
        console.log("qqqqqq", data);
        getUserInfo(user?.userId, accessToken)
          .then((data) => {
            console.log("성공", data);
          })
          .catch((error) => {
            console.error("Error occurred:", error);
          });
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
    setIsEdit(!isEdit);

    // alert("수정되었습니다.");
  };
  // const [name, setName] = useForm(userInfo.name);
  // const [address, setAddress] = useForm(userInfo.address);
  // const [email, setEmail] = useForm(userInfo.email);
  // const [birthDate, setBirthDate] = useForm(userInfo.birthDate);
  // const [contact, setContact] = useForm(userInfo.contact);
  // const [gender, setGender] = useForm(userInfo.gender);
  // const [name, setName] = useState(userInfo?.profile?.name);
  // const [address, setAddress] = useState(userInfo?.profile?.address);
  // const [email, setEmail] = useState(userInfo?.email);
  // const [birthDate, setBirthDate] = useState(userInfo?.profile?.birthDate);
  // const [contact, setContact] = useState(userInfo?.profile?.contact);
  // const [gender, setGender] = useState(userInfo?.profile?.gender);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setName(userInfo?.profile?.name);
    setAddress(userInfo?.profile?.address);
    setEmail(userInfo?.email);
    setBirthDate(userInfo?.profile?.birthDate);
    setContact(userInfo?.profile?.contact);
    setGender(userInfo?.profile?.gender);
    setIsActive(userInfo?.isActive);
  }, [userInfo]);

  return (
    <Container>
      <Content>
        <Title>
          <h3>유저 상세 정보</h3>
        </Title>
        <div>
          {!isEdit ? (
            <ul>
              <li>유저 아이디: {userInfo?.userId}</li>
              <li>이름: {userInfo?.profile?.name}</li>
              <li>주소: {userInfo?.profile?.address}</li>
              <li>이메일: {userInfo?.email}</li>
              <li>생일: {userInfo?.profile?.birthDate}</li>
              <li>전화번호: {userInfo?.profile?.contact}</li>
              <li>성별: {userInfo?.profile?.gender}</li>
              <li>
                사용 가능 여부: {userInfo?.isActive ? "사용 가능" : "승인 필요"}
              </li>
            </ul>
          ) : (
            <div>
              <div>
                이름:
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                주소:
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                이메일:
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                생일:
                <input
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div>
                전화번호:
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div>
                성별:
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div>
                사용 가능 여부:
                <input
                  type="checkbox"
                  checked={isActive}
                  onClick={() => setIsActive(!isActive)}
                />
              </div>
            </div>
          )}
        </div>
        <EditBtn onClick={handleEdit}>
          {isEdit ? "저장하기" : "수정하기"}
        </EditBtn>
      </Content>
      <CloseButton onClick={() => setIsClicked(false)}>X</CloseButton>
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
  z-index: 100;
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

const CloseButton = styled.div`
  position: absolute;
  top: 25%;
  right: 30%;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
`;

const EditBtn = styled.div`
  background-color: violet;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
