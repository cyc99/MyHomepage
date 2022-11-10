import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';  
import styled, { keyframes } from 'styled-components';
import AnimationTest from './Animation';
import AboutPage from './About';

function App2() {
  const [unitHeight, setUnitHeight] = useState(window.innerHeight * 0.01);
  const [curTab, setTab] = useState(0)
  const tabRef = useRef([])
  const viewRef = useRef()

  useEffect(() => {
    const curr = viewRef.current

    const fullPageHandler = (e) => {
      e.preventDefault()
      const innHeight = window.innerHeight
      const {deltaY} = e
      const {scrollTop} = curr
      if (deltaY > 0) {
        if (scrollTop < innHeight * 0.95) {
          curr.scrollTo({
            top: innHeight,
            left: 0,
            behavior: "smooth",
          })
          setTab(1)
        } else if (scrollTop < innHeight * 1.9) {
          curr.scrollTo({
            top: innHeight * 2,
            left: 0,
            behavior: "smooth",
          })
          setTab(2)
        } else if (scrollTop < innHeight * 2.85) {
          curr.scrollTo({
            top: innHeight * 3,
            left: 0,
            behavior: "smooth",
          })
          setTab(3)
        } else {
          curr.scrollTo({
            top: innHeight * 4,
            left: 0,
            behavior: "smooth",
          })
          setTab(4)
        }
      } else {
        if (scrollTop >= innHeight * 3.8) {
          curr.scrollTo({
            top: innHeight * 3,
            left: 0,
            behavior: "smooth",
          })
          setTab(3)
        } else if (scrollTop >= innHeight * 2.85) {
          curr.scrollTo({
            top: innHeight * 2,
            left: 0,
            behavior: "smooth",
          })
          setTab(2)
        } else if (scrollTop >= innHeight * 1.9) {
          curr.scrollTo({
            top: innHeight,
            left: 0,
            behavior: "smooth",
          })
          setTab(1)
        } else {
          curr.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
          setTab(0)
        }
      }
    }

    const resizeHandler = (e) => {
      setUnitHeight(window.innerHeight * 0.01)
      e.preventDefault()
      const innHeight = window.innerHeight
      const {scrollTop} = curr
      if (scrollTop < innHeight * 0.5) {
        curr.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
        setTab(0)
      } else if (scrollTop < innHeight * 1.5 && scrollTop >= innHeight * 0.5) {
        curr.scrollTo({
          top: innHeight,
          left: 0,
          behavior: "smooth",
        })
        setTab(1)
      } else if (scrollTop < innHeight * 2.5 && scrollTop >= innHeight * 1.5) {
        curr.scrollTo({
          top: innHeight * 2,
          left: 0,
          behavior: "smooth",
        })
        setTab(2)
      } else if (scrollTop < innHeight * 3.5 && scrollTop >= innHeight * 2.5) {
        curr.scrollTo({
          top: innHeight * 3,
          left: 0,
          behavior: "smooth",
        })
        setTab(3)
      } else {
        curr.scrollTo({
          top: innHeight * 4,
          left: 0,
          behavior: "smooth",
        })
        setTab(4)
      }
    }

    window.addEventListener('resize', resizeHandler)
    curr.addEventListener('wheel', fullPageHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      curr.removeEventListener('wheel', fullPageHandler)
    }
  })

  return (
    <div className="App" ref={viewRef}>
      <div className="App-header">
        <div className="item" onClick={() => {
          tabRef.current[0].scrollIntoView({behavior:'smooth'})
          setTab(0)
        }}>
          <Logo>CHOI's</Logo>
          <Logo style={{'font-size': 5}}></Logo>
        </div>
        <div className="item"></div>
        <div className="item" onClick={() => {
            tabRef.current[1].scrollIntoView({behavior:'smooth'})
            setTab(1)
          }}
          style = {curTab == 1 ? { 'color': 'red', 'font-weight' : 'bold'} : { 'color': 'white', 'font-weight' : 'normal'}}
        ><TabText>About</TabText></div>
        <div className="item" onClick={() => {
            tabRef.current[2].scrollIntoView({behavior:'smooth'})
            setTab(2)
          }}
          style = {curTab == 2 ? { 'color': 'red', 'font-weight' : 'bold'} : { 'color': 'white', 'font-weight' : 'normal'}}
        ><TabText>Skills</TabText></div>
        <div className="item" onClick={() => {
            tabRef.current[3].scrollIntoView({behavior:'smooth'})
            setTab(3)
          }}
          style = {curTab == 3 ? { 'color': 'red', 'font-weight' : 'bold'} : { 'color': 'white', 'font-weight' : 'normal'}}
        ><TabText>Projects</TabText></div>
        <div className="item" onClick={() => {
            tabRef.current[4].scrollIntoView({behavior:'smooth'})
            setTab(4)
          }}
          style = {curTab == 4 ? { 'color': 'red', 'font-weight' : 'bold'} : { 'color': 'white', 'font-weight' : 'normal'}}
        ><TabText>Contact</TabText></div>
      </div>
      <Inner ref={e => (tabRef.current[0] = e)} min-height='${unitHeight * 100}'>
        <PrefixStyle>Yeongcheol</PrefixStyle>
        <PrefixStyleRev>Good</PrefixStyleRev>
        <Postfix>CHOI'S</Postfix>
        <MainLetter>
          안녕하세요! 주니어 개발자, 최영철입니다. <br/>
          더욱 멋진 개발자가 되기 위해 노력하고 있습니다.
        </MainLetter>
      </Inner>

      <Inner ref = {e => (tabRef.current[1] = e)}>
        <PageName>About</PageName>
        <AboutPage/>
      </Inner>

      <Inner ref = {e => (tabRef.current[2] = e)}>
      <PageName>Skills</PageName>
      </Inner>

      <Inner ref = {e => (tabRef.current[3] = e)}>
      <PageName>Projects</PageName>
      </Inner>

      <Inner ref = {e => (tabRef.current[4] = e)}>
      <PageName>Contact</PageName>
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
  animation: ${changeGradient} 60s infinite ease;
  min-height: 100vh;
  display: flex;
  padding: 0 2rem 0;
  text-shadow: grey 0px 0 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;

const Tab = styled.div`
  font-size: calc(5px + 1vmin);
  color: blue;
`;

const PageName = styled.div`
  position: relative;
  font-size: calc(30px + 1vmin);
  text-align: left;
  font-weight: bolder;
  left: 0vw;
  top: 0vh;
  color: white;
`;

const Postfix = styled.div`
  font-size: calc(10px + 5vmin);
  position: relative;
  top: 3%;
  left: min(5%, 5 * calc(10px + 5vmin));
`;

const MainLetter = styled.div`
  position: relative;
  text-align: center;
  font-size: calc(2.25vh);
  color: white;
  top: 4vh;
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
    position: relative;
    font-size: calc(10px + 5vmin);
    font-weight: bold;
    text-align: center;
    top: -1%;
    right: min(5%, 5 * calc(10px + 5vmin));
    line-height: 0%;
    opacity: 1;
    animation: ${move} 8s infinite normal;
`;
const PrefixStyleRev = styled.div`
    position: relative;
    font-size: calc(10px + 5vmin);
    font-weight: bold;
    right: min(5%, 5 * calc(10px + 5vmin));
    text-align: center;
    line-height: 0%;
    top: -1%;
    opacity: 1;
    animation: ${revMove} 8s infinite normal;
`;

export default App2;
