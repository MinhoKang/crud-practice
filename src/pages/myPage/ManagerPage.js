import React, { useEffect, useState } from "react";
import { getUsersList } from "../../apis/usersList";
import UserCard from "./components/UserCard";

const ManagerPage = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const result = getUsersList(accessToken)
      .then((data) => {
        console.log("User list:", data);
        setUserList(data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
    console.log(result);
  }, []);
  return (
    <div>
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
