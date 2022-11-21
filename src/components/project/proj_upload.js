import React, { useState } from "react";
import AuthVerify from "../../utils/auth_util";
import { useCookies } from "react-cookie";
import Modal from "../modal/modal";
import { axiosAPI } from "../../utils/api_util";
import { Input, NewText, Uploader } from "./style/proj_upload_style";

function ProjectUploader(props) {
  const [filename, setFilename] = useState(null);
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [cookies] = useCookies(["userInfo"]);
  const [title, setTitle] = useState("");
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [link, setLink] = useState("");
  const { fetchItems } = props;

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
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
    event: () => {
      props.closeModal();
    },
  };

  const postProject = () => {
    if (!AuthVerify({ isReload: true })) {
      return false;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    link && link.length > 0 && formData.append("link", link);
    file && formData.append("img", file);
    axiosAPI(
      "project/",
      formData,
      "post",
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${cookies.userInfo.token}`,
      },
      () => {
        fetchItems();
        setSuccess(true);
      },
      () => setFail(true)
    );
  };

  return (
    <Uploader>
      {success && (
        <Modal
          title="알림"
          firstBtn={successBtn}
          zIndex={160}
          style={{ height: "130px" }}
          closeModal={() => {
            setSuccess(false);
            props.closeModal();
          }}
        >
          <div style={{ fontSize: "15px" }}>성공적으로 전송되었습니다.</div>
        </Modal>
      )}
      {fail && (
        <Modal
          title="알림"
          firstBtn={failBtn}
          zIndex={160}
          style={{ height: "130px" }}
          closeModal={() => setFail(false)}
        >
          <div style={{ fontSize: "15px" }}>전송에 실패했습니다.</div>
        </Modal>
      )}
      <div className="title">제목</div>
      <div className="inputTitle">
        <Input
          placeholder="제목을 입력해주세요."
          onChange={(e) => handleChange(e, setTitle)}
        ></Input>
      </div>
      <div className="image">이미지</div>
      <div className="inputImage">
        {file && (
          <div style={{ textAlign: "left" }}>선택한 파일: {filename}</div>
        )}
        {!file && (
          <div style={{ textAlign: "left" }}>선택한 파일이 없습니다.</div>
        )}
        <input
          id="file"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            handleFile(e);
            handleChange(e, setFilename);
          }}
        />
      </div>
      <label className="inputImageBtn" for="file">
        업로드
      </label>
      <div className="content">내용</div>
      <div className="inputContent">
        <NewText
          placeholder="내용을 입력해주세요."
          onChange={(e) => handleChange(e, setContent)}
        ></NewText>
      </div>
      <div className="link">주소</div>
      <div className="inputLink">
        <Input
          placeholder="주소를 입력해주세요."
          onChange={(e) => handleChange(e, setLink)}
        ></Input>
      </div>
      {title.length > 0 && content.length > 0 && (
        <div className="submit" onClick={postProject}>
          전송
        </div>
      )}
      {(title.length === 0 || content.length === 0) && (
        <div className="submitDisabled">전송</div>
      )}
    </Uploader>
  );
}

export default ProjectUploader;
