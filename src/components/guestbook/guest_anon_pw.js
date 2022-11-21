import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modal/modal";
import { GuestAnon, Input } from "./style/guest_anon_pw_style";

function GuestAnonDelete(props) {
  const { closeModal, deleteData, gid } = props;
  const [isModal, setModal] = useState(false);
  const [pw, setPw] = useState("");
  const firstBtn = {
    event: () => {
      setModal(false);
      doDelete();
    },
    value: "삭제",
    style: {
      backgroundColor: "red",
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
  };
  const secondBtn = {
    event: () => {
      setModal(false);
    },
    value: "취소",
    style: {
      backgroundColor: "grey",
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
  };
  const modalStyle = {
    height: "130px",
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const doDelete = () => {
    closeModal();
    deleteData({ gid, password: pw });
  };

  return (
    <GuestAnon>
      {isModal && (
        <Modal
          title={"삭제"}
          firstBtn={firstBtn}
          secondBtn={secondBtn}
          style={modalStyle}
          zIndex={150}
          closeModal={() => setModal(false)}
        >
          <div style={{ fontSize: "15px" }}>정말로 삭제하시겠습니까?</div>
        </Modal>
      )}
      <div className="pwInputs">
        <Input
          type="password"
          onChange={handlePw}
          value={pw}
          placeholder="암호 입력"
        ></Input>
      </div>
      {pw.length >= 8 && (
        <div className="submitBtn" onClick={() => setModal(true)}>
          전송
        </div>
      )}
      {pw.length < 8 && <div className="submitBtnDisabled">전송</div>}
    </GuestAnon>
  );
}

export default GuestAnonDelete;
