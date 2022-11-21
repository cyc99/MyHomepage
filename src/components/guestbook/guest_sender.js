import React, { useEffect, useState } from "react";
import AuthVerify from "../../utils/auth_util";
import { useCookies } from "react-cookie";
import Modal from "../modal/modal";
import { axiosAPI } from "../../utils/api_util";
import { Input, NewText, Sender } from "./style/guest_sender_style";

function GuestSender(props) {
  const [msg, setMsg] = useState("");
  const [pw, setPw] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const [cookies, setCookie] = useCookies(["userInfo"]);
  const [isAuth, setAuth] = useState(cookies.userInfo ? true : false);
  const [isAnon, setAnon] = useState(isAuth ? false : true);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const { fetchGuests } = props;

  const failBtn = {
    value: "확인",
    style: {
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
    event: () => setFail(false),
  };
  const successBtn = {
    value: "확인",
    style: {
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
    event: () => setSuccess(false),
  };

  useEffect(() => {
    setAuth(cookies.userInfo ? true : false);
  }, [cookies]);

  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const postMsg = () => {
    const type = !isAuth || isAnon ? 0 : 1;
    if (type === 1) {
      if (!AuthVerify({ isReload: true })) {
        return false;
      }
    }

    const doSuccess = () => {
      setSubmit(true);
      fetchGuests();
      setSuccess(true);
    };

    const doFail = () => {
      fetchGuests();
      setFail(true);
    };
    switch (type) {
      case 0:
        if (pw.length < 8) {
          alert("비밀번호를 8글자 이상으로 해주세요.");
        } else {
          axiosAPI(
            "guestbook/",
            {
              type: type,
              password: pw,
              title: "방명록",
              content: msg,
            },
            "post",
            null,
            () => {
              setPw("");
              doSuccess();
            },
            doFail
          );
        }
        break;
      case 1:
        axiosAPI(
          "guestbook/",
          {
            type: type,
            title: "방명록",
            content: msg,
          },
          "post",
          {
            Authorization: `Bearer ${cookies.userInfo.token}`,
          },
          doSuccess,
          doFail
        );
        break;
      default:
        setSubmit(true);
        break;
    }
  };

  useEffect(() => {
    if (isSubmit) {
      setMsg("");
      setSubmit(false);
    }
  }, [isSubmit]);

  return (
    <Sender>
      {success && (
        <Modal
          title="알림"
          firstBtn={successBtn}
          zIndex={150}
          style={{ height: "130px" }}
          closeModal={() => setSuccess(false)}
        >
          <div>성공적으로 전송되었습니다.</div>
        </Modal>
      )}
      {fail && (
        <Modal
          title="알림"
          firstBtn={failBtn}
          zIndex={150}
          style={{ height: "130px" }}
          closeModal={() => setFail(false)}
        >
          <div>전송에 실패했습니다.</div>
        </Modal>
      )}
      <div className="anonCheck">
        {isAuth && (
          <input
            type="checkbox"
            id="anon"
            value={isAnon}
            onChange={() => setAnon(!isAnon)}
          />
        )}
        {isAuth && <label for="anon">익명으로 작성하기</label>}
        {!isAuth && <div>익명</div>}
      </div>
      <div className="pwInputs">
        {(!isAuth || isAnon) && (
          <Input
            type="password"
            onChange={handlePw}
            value={pw}
            placeholder="암호 입력"
          ></Input>
        )}
      </div>
      <div className="inputs">
        <NewText rows="5" onChange={handleMsg} value={msg}></NewText>
      </div>
      {(msg.length !== 0 || (isAnon && pw.length >= 8)) && (
        <div className="submitBtn" onClick={() => postMsg()}>
          전송
        </div>
      )}
      {(msg.length === 0 || (isAnon && pw.length < 8)) && (
        <div className="submitBtnDisabled">전송</div>
      )}
    </Sender>
  );
}

export default GuestSender;
