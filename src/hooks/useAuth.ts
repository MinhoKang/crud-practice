import { useNavigate } from "react-router-dom";
import { login } from "../apis/login";

export const UseAuth = () => {
  // TODO: 토큰을 확인하고, 토큰이 없으면 로그인 페이지로 이동
  // 만약 로컬스토리지를 확인해서 토큰이 있다면 (로그인을 했던거니까)
  // 그 토큰으로 로그인 요청을 보낸다.
  // 만료됐다면 리프레시 토큰으로 한번더 요청
  // 200 오케이면 해당 페이지 이동해서 그 토큰을 가지고

  const navigate = useNavigate();

  if (
    localStorage.getItem("accessToken") === undefined ||
    localStorage.getItem("refreshToken") === undefined
  ) {
    alert("로그인이 필요합니다.");
    navigate("/");
  }
  if (localStorage.getItem("accessToken")) {
    const accessToken = localStorage.getItem("accessToken");
    const userEmail = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (userEmail && password) {
      login(userEmail, password)
        .then((result) => {
          console.log("성공", result);
        })
        .catch((error) => {
          console.log("에러", error);
        });
    }
  }
};
