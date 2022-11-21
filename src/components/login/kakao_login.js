import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { axiosAPI } from "../../utils/api_util";

function KakaoAuthCallback() {
  function useQuery() {
    return new URLSearchParams(window.location.search);
  }

  const [cookies, setCookie] = useCookies(["userInfo"]);
  const code = useQuery().get("code");
  const navigate = useNavigate();
  const success = (response) => {
    const data = response.data;
    const token = data.access_token;
    const nickname = data.nickname;
    const isAdmin = data.isAdmin;
    const expiresIn = Date.now() * 0.001 + 3600;
    setCookie(
      "userInfo",
      { token, nickname, isAdmin, expiresIn },
      { path: "/", maxAge: 3600 }
    );
    navigate("/");
  };

  useEffect(() => {
    if (code === null) {
      navigate(-1);
    } else {
      const fetchUserData = async () => {
        axiosAPI(
          "users/api/v2/auth/kakao",
          { code },
          "post",
          null,
          success,
          () => navigate("/")
        );
      };

      fetchUserData();
    }
  }, []);

  return <div>Redirecting...</div>;
}

export default KakaoAuthCallback;
