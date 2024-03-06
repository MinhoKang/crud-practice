import axios from "axios";

const getMyPage = async() => {
    axios.get(`http://test.nowz.me/api/v1/mypage/`)
};
