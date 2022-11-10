import './About.css';
import React, { useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './slider';

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

	return(
    <div className='Outer'>
    <AboutSlider {... settings}>
      <SimpleSlider/>
      <div className='Inner'>
        경력 및 학력<br/><br/>
        2018.02 ~ <br/>
        한국과학기술원 (KAIST)
        <div style={{'font-size': 'calc(7px + 1.4vmin)'}}>
          주전공:전산학부 / 부전공:전기전자공학부
        </div>
        <br/>
        2021.09 ~ 2022.02<br/>
        스톤랩
        <div style={{'font-size': 'calc(7px + 1.4vmin)'}}>
          Backend Engineer<br/>
          (인턴 3개월)<br/>
          <br/>
        </div>
        <div style={{'font-size': 'calc(7px + 1.2vmin)'}}>
          AI를 이용한 맞춤형 진단 인지재활 서비스 (SaaS) 백엔드 개발 <br/><br/>
          <div style={{'font-size': 'calc(5px + 0.8vmin)'}}>- 유저의 결과 데이터를 이용한 통계, 상점, 이미지 업로드 및 다운로드, 숙제, 스케쥴, 회원가입, 게임 설정 저장 등 백엔드 API 개발 및 유지보수 <br/>
          - 서비스를 위한 MySQL DB Schema의 디자인 및 유지보수 <br/>
          - 다국적서비스를 위한 l10n, i18n 방법 연구 및 개발 <br/></div>
        </div>
      </div>
      <div className='Inner'>
        <div style={{'font-size': '5vh'}}>
        언어<br/><br/>
        한국어<br/>
        영어 (중상)<br/>
        일본어 (초보)<br/>
        </div>
      </div>
      <div className='Inner'>
      <div style={{'font-size': '3.5vh'}}>목표<br/><br/>
        - 기술적으로 아름다운 코드 만들기<br/>
        - 멋진 개발자 되기<br/>
        - 개발 블로그를 통해 스스로 학습하면서 분석한 내용이나 유용한 내용으로 사람들에게 기여하기<br/>
        - 다양한 경험과 학습을 통한 성장하기<br/>
        - 현재 웹페이지 반응형으로 업그레이드 하기</div>
      </div>
    </AboutSlider>
  </div>
    
    
  )
}

const AboutSlider = styled(Slider) `
.slick-list {margin: 0 -15px;}
.slick-slide>div {padding: 0 15px;}
`

const Inners = styled.div`
  height: 60vh;
  width: 30vw;
`;

const Inner = styled.div`
  font-size: 20px;
  color: black;
`;

export default AboutPage;