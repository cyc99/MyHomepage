import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../modal/modal";
import ProjectUploader from "./proj_upload";
import { useCookies } from "react-cookie";
import AuthVerify from "../../utils/auth_util";
import { axiosAPI, useFetch } from "../../utils/api_util";
import { ContentContainer, LinkButton, ProjectAdd, ProjectDelete, ProjectSlider, ProjectTitle, SliderContainer } from "./style/proj_items_style";

const Projects = (props) => {
  const { setMainModal } = props;
  const [isModal, setModal] = useState(false);
  const [cookies] = useCookies(["userInfo"]);
  const { userInfo } = cookies;
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [pid, setPid] = useState(null);
  const [value, fetchData] = useFetch(
    [{ isLoaded: 0 }],
    [{ isLoaded: 0 }],
    "project/"
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
  };

  const modalStyle = {
    height: "130px",
    textShadow: "none",
  };

  const firstBtn = {
    event: () => {
      setConfirm(false);
      deleteProject(pid);
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
    event: () => {
      setFail(false);
      setMainModal(false);
    },
  };

  const successBtn = {
    value: "확인",
    style: {
      borderRadius: "5px",
      border: "1px solid rgba(50, 50, 50, 0.5)",
    },
    event: () => {
      setSuccess(false);
      setMainModal(false);
    },
  };

  const openModal = () => {
    setModal(true);
    setMainModal(true);
  };

  const preDelete = (pid) => {
    setPid(pid);
    setMainModal(true);
    setConfirm(true);
  };

  const deleteProject = (pid) => {
    if (!AuthVerify({ isReload: true, checkAdmin: true })) {
      return;
    }
    const sendDelete = async () => {
      axiosAPI(
        "project/",
        { id: pid },
        "delete",
        { Authorization: `Bearer ${userInfo.token}` },
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
    sendDelete();
  };

  const closeModal = () => {
    setModal(false);
    setMainModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
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
          style={{ height: "130px", textShadow: "none" }}
          closeModal={() => {
            setSuccess(false);
            setMainModal(false);
          }}
        >
          <div style={{ fontSize: "15px" }}>성공적으로 삭제되었습니다.</div>
        </Modal>
      )}
      {fail && (
        <Modal
          title="알림"
          firstBtn={failBtn}
          zIndex={150}
          style={{ height: "130px", textShadow: "none" }}
          closeModal={() => {
            setFail(false);
            setMainModal(false);
          }}
        >
          <div style={{ fontSize: "15px" }}>삭제에 실패했습니다.</div>
        </Modal>
      )}
      {isModal && (
        <Modal
          style={{ width: "700px", height: "300px", textShadow: "none" }}
          title={"프로젝트 업로드"}
          closeModal={closeModal}
        >
          <ProjectUploader fetchItems={fetchData} closeModal={closeModal} />
        </Modal>
      )}
      <SliderContainer>
        {userInfo && userInfo.isAdmin && (
          <ProjectAdd onClick={openModal}>프로젝트 추가</ProjectAdd>
        )}
        <ProjectSlider {...settings}>
          {value.map((item, idx) => {
            return (
              <ProjectInfo
                preDelete={preDelete}
                userInfo={userInfo}
                key={idx}
                {...item}
              />
            );
          })}
        </ProjectSlider>
      </SliderContainer>
    </div>
  );
};

const ProjectInfo = (props) => {
  const { id, title, content, img, link, isLoaded, userInfo, preDelete } =
    props;

  if (isLoaded === 0) {
    return <div>컨텐츠가 없습니다.</div>;
  } else {
    return (
      <div>
        <ContentContainer>
          <div className="image">
            <ProjectImage title={title} img={`${img}`} />
          </div>
          <div className="title">
            <ProjectTitle>{title}</ProjectTitle>
          </div>
          <div className="content">
            <ProjectContent content={`${content}`} />
          </div>
          <ProjectLink
            id={id}
            preDelete={preDelete}
            link={link}
            userInfo={userInfo}
          ></ProjectLink>
        </ContentContainer>
      </div>
    );
  }
};

const ProjectContent = (props) => {
  const { content } = props;
  if (content === "") {
    return (
      <div
        style={{
          fontSize: "min(30px, 3vw)",
          textAlign: "left",
          padding: "0 10px",
          textShadow: "grey 0px 0 0px",
        }}
      >
        설명이 없습니다.
      </div>
    );
  } else {
    return (
      <div>
        {content.split("\\n").map((line, idx) => {
          return (
            <div
              key={idx}
              style={{
                fontSize: "min(30px, 3vw)",
                textAlign: "left",
                padding: "0 10px",
                textShadow: "grey 0px 0 0px",
              }}
            >
              {line}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
};

const ProjectImage = (props) => {
  const { img, title } = props;
  if (img === "null") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          color: "white",
          textAlign: "left",
          fontSize: "100px",
          opacity: "70%",
          overflowY: "hidden",
          overflowX: "hidden",
        }}
      >
        Project {title}
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "100% 100%",
          backgroundImage: `url(${img})`,
        }}
      ></div>
    );
  }
};

const ProjectLink = (props) => {
  const { id, link, preDelete, userInfo } = props;
  if (userInfo && userInfo.isAdmin) {
    if (link) {
      return (
        <>
          <div>
            <div className="linkDelete">
              <LinkButton href={link} target="_blank">
                자세히
              </LinkButton>
            </div>
          </div>
          <div className="delete">
            <ProjectDelete onClick={() => preDelete(id)}>삭제</ProjectDelete>
          </div>
        </>
      );
    } else {
      return (
        <div className="deleteComplete">
          <ProjectDelete onClick={() => preDelete(id)}>삭제</ProjectDelete>
        </div>
      );
    }
  } else {
    if (!link) {
      return <div></div>;
    } else {
      return (
        <div className="link">
          <LinkButton href={link} target="_blank">
            자세히
          </LinkButton>
        </div>
      );
    }
  }
};

export default Projects;
