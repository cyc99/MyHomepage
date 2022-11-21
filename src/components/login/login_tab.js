import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Modal from "../modal/modal";
import { FRONTEND_BASE_URI } from "../../config";
import { LogoutText } from "./style/login_tab_style";

function LoginHeader(props) {
  const { setModal } = props;
  const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);
  const [isConfirm, setConfirm] = useState(false);
  const userInfo = cookies.userInfo;
  const modalStyle = {
    height: "130px",
    textShadow: "none",
  };

  const firstBtn = {
    event: () => {
      setConfirm(false);
      setModal(false);
      logOut();
    },
    value: "로그아웃",
    style: {
      backgroundColor: "HoneyDew",
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
  };

  const secondBtn = {
    value: "취소",
    style: {
      backgroundColor: "grey",
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
  };

  const preLogOut = () => {
    setConfirm(true);
    setModal(true);
  };

  const logOut = () => {
    removeCookie(["userInfo"], {
      path: "/",
    });
    window.location.href = FRONTEND_BASE_URI;
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {isConfirm && (
        <Modal
          title={"로그아웃"}
          firstBtn={firstBtn}
          secondBtn={secondBtn}
          style={modalStyle}
          zIndex={150}
          closeModal={() => {
            setModal(false);
            setConfirm(false);
          }}
        >
          <div style={{ fontSize: "15px" }}>정말로 로그아웃하시겠습니까?</div>
        </Modal>
      )}
      {!userInfo && (
        <div style={{ cursor: "pointer" }} onClick={props.openModal}>
          Login
        </div>
      )}
      {userInfo && (
        <div>
          <div style={{ fontWeight: "bolder" }}>{userInfo.nickname}님</div>
          <div>
            <LogoutText onClick={preLogOut}>Logout</LogoutText>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginHeader;
