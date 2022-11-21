import "./css/main.css";
import { useEffect, useRef, useState } from "react";
import AboutPage from "./about";
import Projects from "../project/proj_items";
import LoginHeader from "../login/login_tab";
import {
  onePageScrollHandler,
  resizeHandler,
  tabScrollIntoView,
} from "../../utils/page_util";
import Modal from "../modal/modal";
import Login from "../login/login";
import GuestBook from "../guestbook/guest";
import GitHubSVG from "../../images/github";
import AuthVerify from "../../utils/auth_util";
import { Inner, LangStyle, Logo, MainLetter, PageName, Postfix, PrefixStyle, PrefixStyleRev, ProjectInner, SkillBox, SkillBox2, SkillInner, SkillName, TabText } from "./css/main_style";

function Main() {
  const [curTab, setTab] = useState(0);
  const [isModal, setModal] = useState(false);
  const [isLoginModal, setLoginModal] = useState(false);
  const [isGuestModal, setGuestModal] = useState(false);
  const tabRef = useRef([]);
  const viewRef = useRef();
  const tabScroll = tabScrollIntoView(tabRef, setTab);
  const loginStyle = {
    height: "190px",
  };
  const guestBookStyle = {
    height: "510px",
    width: "400px",
    "background-color": "Cornsilk",
  };

  useEffect(() => {
    const curr = viewRef.current;

    const resizeAction = resizeHandler(curr, setTab, tabRef);
    const scrollAction = !isModal && onePageScrollHandler(curr, setTab, tabRef);
    window.addEventListener("resize", resizeAction);
    !isModal && curr.addEventListener("wheel", scrollAction);

    return () => {
      window.removeEventListener("resize", resizeAction);
      !isModal && curr.removeEventListener("wheel", scrollAction);
    };
  }, [isModal]);

  return (
    <div className="App" ref={viewRef}>
      {isModal && isLoginModal && (
        <Modal
          style={loginStyle}
          title="로그인"
          closeModal={() => {
            setModal(!isModal);
            setLoginModal(!isLoginModal);
          }}
        >
          <Login />
        </Modal>
      )}
      {isModal && isGuestModal && (
        <Modal
          title="방명록"
          style={guestBookStyle}
          closeModal={() => {
            setModal(!isModal);
            setGuestModal(!isGuestModal);
          }}
        >
          <GuestBook />
        </Modal>
      )}
      <div className="App-header">
        <div
          className="item"
          onClick={() => {
            tabRef.current[0].scrollIntoView({ behavior: "smooth" });
            setTab(0);
          }}
        >
          <Logo>CHOI's</Logo>
          <Logo style={{ fontSize: 5 }}></Logo>
        </div>
        <div className="item"></div>
        <div className="item">
          <GitHubSVG
            style={{
              fill: "white",
              height: "max(30%, 35px)",
              width: "max(30%, 35px)",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.replace("https://github.com/cyc99");
            }}
          />
        </div>
        <div
          className="item"
          onClick={() => {
            tabScroll(1);
          }}
          style={
            curTab === 1
              ? { color: "red", fontWeight: "bold" }
              : { color: "white", fontWeight: "normal" }
          }
        >
          <TabText>About</TabText>
        </div>
        <div
          className="item"
          onClick={() => {
            tabScroll(2);
          }}
          style={
            curTab === 2
              ? { color: "red", fontWeight: "bold" }
              : { color: "white", fontWeight: "normal" }
          }
        >
          <TabText>Skills</TabText>
        </div>
        <div
          className="item"
          onClick={() => {
            tabScroll(3);
          }}
          style={
            curTab === 3
              ? { color: "red", fontWeight: "bold" }
              : { color: "white", fontWeight: "normal" }
          }
        >
          <TabText>Projects</TabText>
        </div>
        <div
          className="item"
          onClick={() => {
            setModal(true);
            setGuestModal(true);
          }}
        >
          <TabText>Guest Book</TabText>
        </div>
        <LoginHeader
          setModal={setModal}
          openModal={() => {
            setModal(true);
            setLoginModal(true);
          }}
        />
      </div>
      <Inner ref={(e) => (tabRef.current[0] = e)}>
        <PrefixStyle>Yeongcheol</PrefixStyle>
        <PrefixStyleRev>Good</PrefixStyleRev>
        <Postfix>CHOI'S</Postfix>
        <MainLetter>
          안녕하세요! 주니어 개발자, 최영철입니다. <br />
          더욱 멋진 개발자가 되기 위해 노력하고 있습니다.
        </MainLetter>
      </Inner>

      <Inner ref={(e) => (tabRef.current[1] = e)}>
        <PageName>About</PageName>
        <AboutPage />
      </Inner>

      <SkillInner
        ref={(e) => (tabRef.current[2] = e)}
        style={{ padding: "0 10vh" }}
      >
        <SkillName>Skills</SkillName>
        <SkillBox>
          Language
          <br />
          <br />
          <LangStyle>Python</LangStyle>
          <LangStyle>C</LangStyle>
          <LangStyle>JavaScript</LangStyle>
          <LangStyle>Rust</LangStyle>
        </SkillBox>
        <SkillBox2>
          Frameworks
          <br />
          <br />
          <LangStyle>Django</LangStyle>
          <LangStyle>React</LangStyle>
        </SkillBox2>
        <SkillBox>
          ETC
          <br />
          <br />
          <LangStyle>AWS</LangStyle>
          <LangStyle>MySQL</LangStyle>
          <LangStyle>RDBMS</LangStyle>
        </SkillBox>
      </SkillInner>

      <ProjectInner ref={(e) => (tabRef.current[3] = e)}>
        <div style={{ position: "relative", top: "5%", fontWeight: "bolder" }}>
          Projects
        </div>
        <Projects setMainModal={setModal} />
      </ProjectInner>
      <AuthVerify />
    </div>
  );
}

export default Main;
