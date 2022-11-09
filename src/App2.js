import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';  
import styled, { keyframes } from 'styled-components';

function App2() {
  const [prefix, setPrefix] = useState("GOOD")
  const [isSecond, setSecond] = useState(true)

  useEffect(() => {
    const inter = setInterval(() => {
      console.log('this is called');
      setPrefix(isSecond ? "YEONGCHEOL" : "GOOD");
      setSecond(!isSecond);
    }, 1000);
    return () => clearInterval(inter);
  });

  return (
    <div className="grid_con">
      <div className="item">
        <PrefixStyle>{prefix}</PrefixStyle>
      </div>
      <div className="item">
        <div className='postfix_name'>CHOI'S
        </div>
      </div>
    </div>
  )
}

const move = keyframes`
0% {
  transform: translateX(-70%);
  opacity: 1;
}
100% {
  transform: translateY(0%);
  opacity: 0;
}
`;

const revMove = keyframes`
0% {
  transform: translateX(0%);
  opacity: 0;
}
100% {
  transform: translateX(-70%);
  opacity: 1;
}
`;

const PrefixStyle = styled.div`
    font-size: 5rem;
    font-weight: bold;
    text-align: right;
    opacity: 1;
    animation: ${move} 1s  linear infinite;
`;
const PrefixStyleRev = styled.div`
    font-size: 5rem;
    font-weight: bold;
    text-align: right;
    opacity: 1;
    animation: ${revMove} 1s linear infinite;
`;

export default App2;
