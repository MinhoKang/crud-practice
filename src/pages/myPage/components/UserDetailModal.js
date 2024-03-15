import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserInfo } from "../../../apis/userInfo";
import { editInfo } from "../../../apis/editInfo";

const UserDetailModal = ({ user, setIsClicked }) => {
  const [userInfo, setUserInfo] = useState({});
  const [editedUserInfo, setEditedUserInfo] = useState({});
  console.log("유저인포포포포ㅗㅍ포ㅗ", userInfo);
  // 유저 정보 불러오기
  let accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    getUserInfo(user?.userId, accessToken)
      .then((data) => {
        setUserInfo(data);
        setEditedUserInfo(data);
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
  // const updatedUserInfo = {};
  // const detectValueChange = (object) => {
  //   return new Proxy(object, {
  //     set: (target, property, value) => {
  //       if (target[property] !== value) {
  //         updatedUserInfo[property] = value;
  //       }
  //       target[property] = value;
  //       return true;
  //     },
  //     get(target, property) {
  //       if (property === "getChanges") {
  //         return () => updatedUserInfo;
  //       }
  //       return target[property];
  //     },
  //   });
  // };
  // detectValueChange(userInfo);
  // // const changes = userInfo.map((user) => user.detectValueChange(user));
  // // console.log("cccccccccccc", changes);
  // let trackedObject = detectValueChange(userInfo);
  // console.log("변경 전:", trackedObject);
  // trackedObject.profile.name = "바뀐 이름";
  // console.log("변경 gngn:", trackedObject);

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    // const updatedUserInfo = {
    //   ...userInfo,
    //   profile: {
    //     ...userInfo.profile,
    //     name: name,
    //     address: address,
    //     birthDate: birthDate,
    //     contact: contact,
    //     gender: gender,
    //   },
    //   email: email,
    // };
    // console.log("updatedUserInfo", updatedUserInfo);
    // const handleInputChange = (e) => {
    //   const { name, value } = e.target;
    //   setEditedUserInfo((prev) => ({
    //     ...prev,

    //   }))
    // }
    editInfo(user?.userId, accessToken, editedValue)
      .then((data) => {
        console.log("qqqqqq", data);
        getUserInfo(user?.userId, accessToken)
          .then((data) => {
            console.log("성돋공");
          })
          .catch((error) => {
            console.error("Error occurred:", error);
          });
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
    setIsEdit(!isEdit);
  };
  console.log("object", userInfo);

  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [birthDate, setBirthDate] = useState("");
  // const [contact, setContact] = useState("");
  // const [gender, setGender] = useState("");
  // const [isActive, setIsActive] = useState("");

  const [value, setValue] = useState({
    profile: {
      birthDate: "",
      name: "",
      contact: "",
      address: "",
      gender: "",
    },
    email: "",
    isActive: "",
  });

  console.log("value", value);

  const [editedValue, setEditedValue] = useState({
    // profile: {
    // birthDate: "",
    // name: "",
    // contact: "",
    // address: "",
    // gender: "",
    // },
    // email: "",
    // isActive: "",
  });
  console.log("editedValue", editedValue);

  // 변경된 값들을 추출하여 새로운 객체로 반환하는 함수
  const extractChangedValues = (newValue, previousValue) => {
    const changedValue = {};

    // profile 객체 내의 각 키를 확인하며 변경된 값들을 추출
    for (const key in newValue.profile) {
      if (newValue.profile[key] !== previousValue.profile[key]) {
        changedValue.profile = {
          ...changedValue.profile,
          [key]: newValue.profile[key],
        };
      }
    }

    // email 값이 변경되었는지 확인
    if (newValue.email !== previousValue.email) {
      changedValue.email = newValue.email;
    }

    // isActive 값이 변경되었는지 확인
    if (newValue.isActive !== previousValue.isActive) {
      changedValue.isActive = newValue.isActive;
    }

    return changedValue;
  };

  // value 객체가 변경될 때마다 호출되는 함수
  const handleValueChange = (editedValue) => {
    // 이전 값과 새로운 값 사이에서 변경된 값들을 추출
    const changedValue = extractChangedValues(editedValue, value);

    // 변경된 값들을 출력
    console.log("changedValue", changedValue);
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    // setName(userInfo?.profile?.name);
    // setAddress(userInfo?.profile?.address);
    // setEmail(userInfo?.email);
    // setBirthDate(userInfo?.profile?.birthDate);
    // setContact(userInfo?.profile?.contact);
    // setGender(userInfo?.profile?.gender);
    // setIsActive(userInfo?.isActive);
    value.profile.name = userInfo?.profile?.name;
    value.profile.address = userInfo?.profile?.address;
    value.profile.birthDate = userInfo?.profile?.birthDate;
    value.profile.contact = userInfo?.profile?.contact;
    value.profile.gender = userInfo?.profile?.gender;
    value.email = userInfo?.email;
    value.isActive = userInfo?.isActive;

    // editedValue.profile.name = userInfo?.profile?.name;
    // editedValue.profile.address = userInfo?.profile?.address;
    // editedValue.profile.birthDate = userInfo?.profile?.birthDate;
    // editedValue.profile.contact = userInfo?.profile?.contact;
    // editedValue.profile.gender = userInfo?.profile?.gender;
    // editedValue.email = userInfo?.email;
    // editedValue.isActive = userInfo?.isActive;
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
                <input
                  defaultValue={value.profile.name}
                  onChange={(e) =>
                    setEditedValue({
                      ...editedValue,
                      profile: {
                        ...editedValue.profile,
                        name: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                주소:
                <input
                  defaultValue={value.profile.address}
                  onChange={(e) =>
                    setEditedValue({
                      ...editedValue,
                      profile: {
                        ...editedValue.profile,
                        address: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                이메일:
                <input
                  defaultValue={value.email}
                  onChange={(e) =>
                    setEditedValue({
                      ...editedValue,
                      email: e.target.value,
                      profile: {
                        ...editedValue.profile,
                      },
                    })
                  }
                />
              </div>
              <div>
                생일:
                <input
                  defaultValue={value.profile.birthDate}
                  onChange={(e) =>
                    setEditedValue({
                      ...editedValue,
                      profile: {
                        ...editedValue.profile,
                        birthDate: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                전화번호:
                <input
                  defaultValue={value.profile.contact}
                  onChange={(e) =>
                    setEditedValue({
                      ...editedValue,
                      profile: {
                        ...editedValue.profile,
                        contact: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                성별:
                <input
                  defaultValue={value.profile.gender}
                  onChange={(e) =>
                    setEditedValue({
                      ...editedValue,
                      profile: {
                        ...editedValue.profile,
                        gender: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                사용 가능 여부:
                <input
                  type="checkbox"
                  defaultChecked={value.isActive}
                  onClick={(e) =>
                    setEditedValue({
                      ...editedValue,
                      isActive: e.target.checked,
                      profile: {
                        ...editedValue.profile,
                      },
                    })
                  }
                />
              </div>
            </div>
          )}
        </div>

        {isEdit ? (
          <EditBtn onClick={handleEdit}>저장하기</EditBtn>
        ) : (
          <EditBtn onClick={handleValueChange}>수정하기</EditBtn>
        )}
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
