import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import MyPage from "./pages/myPage/MyPage";
import UserDetailModal from "./pages/myPage/components/UserDetailModal";
import { UseAuth } from "./hooks/useAuth";

function App() {
  // 만약 로컬스토리지를 확인해서 토큰이 있다면 (로그인을 했던거니까)
  // 그 토큰으로 로그인 요청을 보낸다.
  // 만료됐다면 리프레시 토큰으로 한번더 요청
  // 200 오케이면 해당 페이지 이동해서 그 토큰을 가지고
  return (
    <BrowserRouter>
      <UseAuth />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="user:id" element={<UserDetailModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
