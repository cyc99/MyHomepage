import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';  
import styled, { keyframes } from 'styled-components';

function App2() {
  const [unitHeight, setUnitHeight] = useState(window.innerHeight * 0.01);
  const [curPage, setPage] = useState(1)
  const tabRef = useRef([]);

  useEffect(() => {
    function resizeHeight() {
      setUnitHeight(window.innerHeight * 0.01);
      console.log(unitHeight);
    }
    
    window.addEventListener('resize', resizeHeight)

    return () => {
      window.removeEventListener('resize', resizeHeight);
    }
  })

  return (
    <div className="App">
      <div className="App-header">
        <div className="item" onClick={() => tabRef.current[0].scrollIntoView({behavior:'smooth'})}><Logo>CHOI's</Logo></div>
        <div className="item"></div>
        <div className="item" onClick={() => tabRef.current[1].scrollIntoView({behavior:'smooth'})}><TabText>About</TabText></div>
        <div className="item" onClick={() => tabRef.current[2].scrollIntoView({behavior:'smooth'})}><TabText>Skills</TabText></div>
        <div className="item" onClick={() => tabRef.current[3].scrollIntoView({behavior:'smooth'})}><TabText>Projects</TabText></div>
        <div className="item" onClick={() => tabRef.current[4].scrollIntoView({behavior:'smooth'})}><TabText>Contact</TabText></div>
      </div>
      <Inner ref={e => (tabRef.current[0] = e)} min-height='${unitHeight * 100}'>
        <PrefixStyle top='${unitHeight * 49.5}'>Yeongcheol</PrefixStyle>
        <PrefixStyleRev top='${unitHeight * 49.5}'>Good</PrefixStyleRev>
        <Postfix top='${unitHeight * 50.5}'>CHOI'S</Postfix>
        <MainLetter>
          안녕하세요! 주니어 개발자, 최영철입니다. <br/>
          더욱 멋진 개발자가 되기 위해 노력하고 있습니다.
        </MainLetter>
      </Inner>

      <Inner ref = {e => (tabRef.current[1] = e)}>
        About
      </Inner>

      <Inner ref = {e => (tabRef.current[2] = e)}>
        Skills
      </Inner>

      <Inner ref = {e => (tabRef.current[3] = e)}>
        Projects
      </Inner>

      <Inner ref = {e => (tabRef.current[4] = e)}>
        Contact
      </Inner>
    </div>
  )
}

const changeGradient = keyframes`
  0% {
    background-position: 25% 75%;
  }
  50% {
    background-position: 75% 25%;
  }
  100% {
    background-position: 25% 75%;
  }
`;

const Inner = styled.div`
  background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(202,59,115,1) 12%, rgba(170,85,212,1) 24%, rgba(108,144,221,1) 37%, rgba(81,217,230,1) 50%, rgba(105,238,55,1) 66%, rgba(242,179,41,1) 76%, rgba(249,123,20,1) 88%, rgba(255,0,0,1) 100%);
  background-size: 400% 400%;
  height: 100vh;
  animation: ${changeGradient} 120s infinite ease;
  min-height: 100vh;
  display: flex;
  padding: 0 2rem 0;
  text-shadow: grey 0px 0 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Tab = styled.div`

  font-size: calc(5px + 1vmin);
  color: blue;
`;

const Postfix = styled.div`
  font-size: calc(10px + 5vmin);
  position: absolute;
  top: 40vh;
  left: 48vw;
`;

const MainLetter = styled.div`
  position: absolute;
  top: 55vh;
  text-align: center;
  font-size: calc(2.25vh);
  color: white;
`;

const LogoHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  padding: 0 2rem 0;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const move = keyframes`
0% {
  transform: scale(1, 0);
  opacity: 0;
}
25% {
  transform: scale(1, 1);
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 0;
}
`;

const logoAnimate = keyframes`
  0% {
    text-shadow: blue 0px 0 20px;
  }
  50% {
    text-shadow: blue 0px 0 0px;
  }
  100% {
    text-shadow: blue 0px 0 20px;
  }
`;

const TabText = styled.div`
  color: white;
  &:hover{
    font-weight: bold;
    color: orangered;
  }
`;

const Logo = styled.div`
  font-weight: bold;
  color: white;
  text-shadow: #FC0 0px 0 10px;
  animation: ${logoAnimate} 5s linear infinite;
  &:hover{
    color: orangered;
  }
`;

const revMove = keyframes`
0% {
  transform: scale(1, 0);
  opacity: 0;
}
50% {
  transform: scale(1, 0);
  opacity: 0;
}
75% {
  transform: scale(1, 1);
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const PrefixStyle = styled.div`
    position: absolute;
    font-size: calc(10px + 5vmin);
    font-weight: bold;
    text-align: right;
    right: 48vw;
    top: 35vh;
    line-height: 0%;
    opacity: 1;
    animation: ${move} 8s infinite normal;
`;
const PrefixStyleRev = styled.div`
    position: absolute;
    font-size: calc(10px + 5vmin);
    font-weight: bold;
    text-align: right;
    line-height: 0%;
    right: 48vw;
    top: 35vh;
    opacity: 1;
    animation: ${revMove} 8s infinite normal;
`;

export default App2;
