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
  //   editInfo(user?.userId, accessToken)
  //     .then((data) => {
  //       console.log("qqqqqq", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred:", error);
  //     });
  // }, []);

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const [changeActive, setChangeActive] = useState(user?.isActive);
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
                사용 가능 여부: {user?.isActive ? "사용 가능" : "승인 필요"}
              </li>
            </ul>
          ) : (
            <div>
              <div>
                이름:
                <input value={user?.profile?.name} />
              </div>
              <div>
                주소:
                <input value={user?.profile?.address} />
              </div>
              <div>
                이메일:
                <input value={user?.email} />
              </div>
              <div>
                생일:
                <input value={user?.profile?.birthDate} />
              </div>
              <div>
                전화번호:
                <input value={user?.profile?.contact} />
              </div>
              <div>
                성별:
                <input value={user?.profile?.gender} />
              </div>
              <div>
                사용 가능 여부:
                <input
                  type="checkbox"
                  checked={changeActive}
                  onClick={() => setChangeActive(!changeActive)}
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
