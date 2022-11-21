import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { axiosAPI } from "../../utils/api_util";

function GoogleAuthCallback() {
  const [cookies, setCookie] = useCookies(["userInfo"]);
  const navigate = useNavigate();
  const hash = window.location.hash;
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
    if (hash === null || hash === "") {
      navigate("/");
    } else {
      const access_token = hash.split("=")[1].split("&")[0];
      const fetchUserData = async () => {
        axiosAPI(
          "users/api/v2/auth/google",
          { access_token },
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

export default GoogleAuthCallback;
