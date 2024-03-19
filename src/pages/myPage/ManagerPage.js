import React, { useEffect, useState } from "react";
import { getUsersList } from "../../apis/usersList";
import UserCard from "./components/UserCard";

const ManagerPage = () => {
  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    try {
      const {
        data: {
          data: { results },
        },
      } = await getUsersList();

      console.log("userList data: ", results);
      setUserList(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);
  // axiosInstance.interceptors.request.use(async (req) => {
  //   if (!accessToken) {
  //     accessToken = localStorage.getItem("accessToken");
  //     req.headers.Authorization = `Bearer ${accessToken}`;
  //     console.log("!!accessToken");
  //   }
  //   try {
  //     const user = jwtDecode(accessToken);
  //     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  //     console.log("isExpired", isExpired);
  //     if (!isExpired) return req;
  //     console.log("시도중........");
  //     const response = await axios.post(`${baseURL}refresh/`, {
  //       refresh: refreshToken,
  //     });
  //     localStorage.setItem("accessToken", response.data.accessToken);
  //   } catch (error) {
  //     console.error(error);
  //     console.log("에러발생");
  //     return req;
  //   }
  // });
  if (!userList) return <div>로딩중...</div>;

  return (
    <div>
      <button onClick={fetchUserList}>유저정보 새로 가져오기</button>
      <h2>Manager Page</h2>
      <div>
        현재 학생 수 <span>{userList.length}명</span>
        <div>
          {userList.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;
