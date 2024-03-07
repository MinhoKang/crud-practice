import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import MyPage from "./pages/myPage/MyPage";
import UserDetailModal from "./pages/myPage/components/UserDetailModal";

function App() {
  return (
    <BrowserRouter>
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
