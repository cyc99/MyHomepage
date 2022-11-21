import React, { useState } from "react";
import "./style/guest.css";
import GuestSender from "./guest_sender";
import Modal from "../modal/modal";
import GuestAnonDelete from "./guest_anon_pw";
import AuthVerify from "../../utils/auth_util";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { axiosAPI, useFetch } from "../../utils/api_util";
import { GuestContainer, GuestGrid, GuestGridContainer } from "./style/guest_style";

function GuestBook() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["userInfo"]);
  const [isModal, setModal] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, fetchData] = useFetch([], [], "guestbook/");
  const [deleteGid, setDeleteGid] = useState(null);

  const modalStyle = {
    height: "130px",
    textShadow: "none",
  };

  const firstBtn = {
    event: () => {
      setConfirm(false);
      deleteData({
        gid: deleteGid,
        type: 1,
      });
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
      setConfirm(false);
    },
    value: "취소",
    style: {
      backgroundColor: "grey",
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
  };

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

  const preDelete = (gid) => {
    setDeleteGid(gid);
    setConfirm(true);
  };

  function deleteData(props) {
    const { gid, type, password } = props;
    if (type) {
      if (!AuthVerify({ isReload: true })) {
        return false;
      }
    }
    const deleteGuest = async () => {
      const token = cookies.userInfo ? cookies.userInfo.token : null;
      axiosAPI(
        "guestbook/",
        { gid, password },
        "delete",
        { Authorization: `Bearer ${token}` },
        () => {
          fetchData();
          setSuccess(true);
        },
        () => {
          fetchData();
          setFail(true);
        }
      );
    };
    
    deleteGuest();
  };

  return (
    <GuestContainer>
      {isModal && (
        <Modal
          title="방명록 삭제"
          zIndex={150}
          style={{ height: "130px" }}
          closeModal={() => setModal(false)}
        >
          <GuestAnonDelete
            deleteData={deleteData}
            closeModal={() => setModal(false)}
            gid={deleteGid}
          />
        </Modal>
      )}
      {isConfirm && (
        <Modal
          title={"삭제"}
          firstBtn={firstBtn}
          secondBtn={secondBtn}
          style={modalStyle}
          zIndex={150}
          closeModal={() => setConfirm(false)}
        >
          <div style={{ fontSize: "15px" }}>정말로 삭제하시겠습니까?</div>
        </Modal>
      )}
      {success && (
        <Modal
          title="알림"
          firstBtn={successBtn}
          zIndex={150}
          style={{ height: "130px" }}
          closeModal={() => setSuccess(false)}
        >
          <div>성공적으로 삭제되었습니다.</div>
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
          <div>삭제에 실패했습니다.</div>
        </Modal>
      )}
      <GuestGridContainer>
        {value.map((guest, idx) => {
          return (
            <GuestItem
              key={idx}
              preDelete={preDelete}
              setDeleteGid={setDeleteGid}
              setModal={setModal}
              {...guest}
            />
          );
        })}
      </GuestGridContainer>
      <GuestSender fetchGuests={fetchData} navigate={navigate} />
    </GuestContainer>
  );
}

const GuestItem = (props) => {
  const {
    preDelete,
    setDeleteGid,
    setModal,
    gid,
    nickname,
    type,
    content,
    created_at,
  } = props;
  const date = new Date(created_at);
  const doDelete = () => {
    if (type === 0) {
      setDeleteGid(gid);
      setModal(true);
    } else {
      preDelete(gid);
    }
  };
  return (
    <GuestGrid>
      <div className="title">{date.toLocaleDateString("ko-KR")}</div>
      <div className="delete" onClick={() => doDelete()}>
        삭제
      </div>
      <div className="author">{nickname ? nickname : "익명"}</div>
      <div className="content">
        <GuestContent content={content} />
      </div>
    </GuestGrid>
  );
};

const GuestContent = (props) => {
  const { content } = props;
  if (content === "" || !content) {
    return "내용이 없습니다.";
  } else {
    return (
      <div>
        {content.split("\\n").map((line, idx) => {
          return (
            <div>
              {line}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
};

export default GuestBook;
