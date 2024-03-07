import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import MyPage from "./pages/myPage/MyPage";
import UserDetail from "./pages/myPage/components/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="user:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
