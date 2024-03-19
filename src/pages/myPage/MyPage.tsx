import React, { useEffect } from "react";
import ManagerPage from "./ManagerPage";
import StudentPage from "./StudentsPage";

const MyPage = () => {
  // 마이 페이지로 이동 했을 때 api 한 번 호출
  useEffect(() => {
    // 마이페이지 정보 불러오기
  }, []);

  const type = localStorage.getItem("type");
  return <div>{type === "manager" ? <ManagerPage /> : <StudentPage />}</div>;
};

export default MyPage;
