import "./css/about.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleInfo from "./simpleinfo";
import { AboutSlider } from "./css/about_style";

const AboutPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: 0,
    variableHeight: true,
  };

  return (
    <div className="Outer">
      <AboutSlider {...settings}>
        <SimpleInfo />
        <div className="Inner">
          경력 및 학력
          <br />
          <br />
          2018.02 ~ <br />
          한국과학기술원 (KAIST)
          <div style={{ fontSize: "calc(7px + 1.4vmin)" }}>
            주전공:전산학부 / 부전공:전기전자공학부
          </div>
          <br />
          2021.09 ~ 2022.02
          <br />
          스톤랩
          <div style={{ fontSize: "calc(7px + 1.4vmin)" }}>
            Backend Engineer
            <br />
            (인턴 3개월)
            <br />
            <br />
          </div>
          <div style={{ fontSize: "calc(7px + 1.2vmin)" }}>
            AI를 이용한 맞춤형 진단 인지재활 서비스 (SaaS) 백엔드 개발 <br />
            <br />
            <div style={{ fontSize: "calc(5px + 0.8vmin)" }}>
              - 유저의 결과 데이터를 이용한 통계, 상점, 이미지 업로드 및
              다운로드, 숙제, 스케쥴, 회원가입, 게임 설정 저장 등 백엔드 API
              개발 및 유지보수 <br />
              - 서비스를 위한 MySQL DB Schema의 디자인 및 유지보수 <br />
              - 다국적서비스를 위한 l10n, i18n 방법 연구 및 개발 <br />
            </div>
          </div>
        </div>
        <div className="Inner">
          <div style={{ fontSize: "5vh" }}>
            언어
            <br />
            <br />
            한국어
            <br />
            영어 (중상)
          </div>
        </div>
        <div className="Inner">
          <div style={{ fontSize: "3.5vh" }}>
            목표
            <br />
            <br />
            - 멋진 개발자 되기
            <br />
            - 개발 블로그를 통해 스스로 학습하면서 분석한 내용이나 유용한
            내용으로 사람들에게 기여하기
            <br />- 다양한 경험과 학습을 통한 성장하기
          </div>
        </div>
      </AboutSlider>
    </div>
  );
};

export default AboutPage;
