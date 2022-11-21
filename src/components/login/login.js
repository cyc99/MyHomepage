import React from "react";
import KakaoSVG from "../../images/kakao-svg";
import {
  GoogleLoginButton,
  createButton,
  createSvgIcon,
} from "react-social-login-buttons";
import { GOOGLE_LOGIN_URI, KAKAO_LOGIN_URI } from "../../config";

function Login() {

  const kakao_btn_config = {
    text: "카카오로 로그인",
    icon: createSvgIcon(KakaoSVG),
    iconSize: "26px",
    iconFormat: (name) => `fa fa-${name}`,
    style: { background: "#FEE500", color: "black" },
    activeStyle: { background: "#FEE570" },
  };
  const KakaoBtn = createButton(kakao_btn_config);

  const googlePage = () => {
    window.location.assign(GOOGLE_LOGIN_URI);
  };

  const kakaoPage = () => {
    window.location.assign(KAKAO_LOGIN_URI);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <GoogleLoginButton onClick={googlePage}>구글로 로그인</GoogleLoginButton>
      <KakaoBtn onClick={kakaoPage}></KakaoBtn>
    </div>
  );
}

export default Login;
