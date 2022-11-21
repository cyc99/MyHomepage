import styled, { keyframes } from "styled-components";

export const changeGradient = keyframes`
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

export const LangStyle = styled.div`
  &:hover {
    font-weight: bold;
    transform: scale(1.1);
    transition: 0.5s;
  }
  transform: scale(1);
  font-weight: normal;
  transition: 0.5s;
`;

export const Inner = styled.div`
  background: linear-gradient(
    45deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(202, 59, 115, 1) 12%,
    rgba(170, 85, 212, 1) 24%,
    rgba(108, 144, 221, 1) 37%,
    rgba(81, 217, 230, 1) 50%,
    rgba(105, 238, 55, 1) 66%,
    rgba(242, 179, 41, 1) 76%,
    rgba(249, 123, 20, 1) 88%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  height: 100vh;
  animation: ${changeGradient} 55s infinite ease;
  min-height: 100vh;
  display: flex;
  padding: 0 0 0;
  text-shadow: grey 0px 0 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
  gap: 0;
`;

export const ProjectInner = styled(Inner)`
  padding: 0;
`;

export const SkillInner = styled(Inner)`
  background: linear-gradient(
    45deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(202, 59, 115, 1) 12%,
    rgba(170, 85, 212, 1) 24%,
    rgba(108, 144, 221, 1) 37%,
    rgba(81, 217, 230, 1) 50%,
    rgba(105, 238, 55, 1) 66%,
    rgba(242, 179, 41, 1) 76%,
    rgba(249, 123, 20, 1) 88%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  height: 100vh;
  animation: ${changeGradient} 55s infinite ease;
  min-height: 100vh;
  display: flex;
  text-shadow: grey 0px 0 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const PageName = styled.div`
  position: relative;
  font-size: calc(30px + 1vmin);
  text-align: left;
  font-weight: bolder;
  left: 0vw;
  top: 0vh;
  color: white;
`;

export const SkillName = styled.div`
  top: 20vh;
  position: relative;
  font-size: min(60px, 7vw);
  text-align: left;
  font-weight: bolder;
  height: 10%;
  width: 100%;
  color: white;
`;

export const langKeyframe = keyframes`
  0% {
    top: 0%
  }
  50% {
    top: 10%
  }
  100% {
    top: 0%
  }
`;

export const langKeyframe2 = keyframes`
  0% {
    top: 10%
  }
  50% {
    top: 0%
  }
  100% {
    top: 10%
  }
`;

export const SkillBox = styled.div`
  position: relative;
  font-size: min(45px, 5vw);
  text-align: left;
  font-weight: normal;
  height: 50%;
  width: 29%;
  color: white;
  animation: ${langKeyframe} 10s ease infinite;
`;

export const SkillBox2 = styled.div`
  position: relative;
  font-size: min(45px, 5vw);
  text-align: left;
  font-weight: normal;
  height: 50%;
  width: 29%;
  color: white;
  animation: ${langKeyframe2} 10s ease infinite;
`;

export const Postfix = styled.div`
  font-size: calc(10px + 5vmin);
  position: relative;
  top: 3%;
  left: min(5%, 5 * calc(10px + 5vmin));
  user-select: none;
`;

export const MainLetter = styled.div`
  position: relative;
  text-align: center;
  font-size: calc(2.25vh);
  color: white;
  top: 4vh;
`;

export const move = keyframes`
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

export const logoAnimate = keyframes`
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

export const TabText = styled.div`
  color: white;
  user-select: none;
  &:hover {
    font-weight: bold;
    color: orangered;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  color: white;
  text-shadow: #fc0 0px 0 10px;
  animation: ${logoAnimate} 5s linear infinite;
  &:hover {
    color: orangered;
  }
`;

export const revMove = keyframes`
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

export const PrefixStyle = styled.div`
  position: relative;
  font-size: calc(10px + 5vmin);
  font-weight: bold;
  text-align: center;
  top: -1%;
  right: min(5%, 5 * calc(10px + 5vmin));
  line-height: 0%;
  opacity: 1;
  animation: ${move} 8s infinite normal;
  user-select: none;
`;

export const PrefixStyleRev = styled.div`
  position: relative;
  font-size: calc(10px + 5vmin);
  font-weight: bold;
  right: min(5%, 5 * calc(10px + 5vmin));
  text-align: center;
  line-height: 0%;
  top: -1%;
  opacity: 1;
  animation: ${revMove} 8s infinite normal;
  user-select: none;
`;