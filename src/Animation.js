import './AnimationTest.css';
import React from 'react';
import styled, {keyframes} from 'styled-components';
import { useEffect, useState } from 'react'; 

const AnimationTest = () => {
  const [c,d] = useState(false);
  const [t,g] = useState("NICE");

  useEffect(() => {
    const k = setInterval(() => {
      g(c ? "GOOD" : "NICE");
      d(c ? false : true);
    }, 5000);
    return () => clearInterval(k);
  });

	return(
    	<div className="grid_con">
          <div className="item"><TESS>{t}</TESS>
          </div>
        </div>
    )
}

const move = keyframes`
0% {
  opacity: 0;
}
10% {
  opacity: 0;
}
25% {
  opacity: 1;
}
75% {
  opacity: 1;
}
90% {
  opacity: 0;
}
100% {
  opacity: 0;
}
`;

const Box = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 150px;
    //여기서부터는 animation과 연관 있음
    background: green;
    position: absolute;
    top: 20px;
    left: 20px;
    opacity: 1;
    animation: ${move} 5s infinite;
`;

const TESS = styled.div`
    font-size: 3rem;
    position: absolute;
    opacity: 1;
    animation: ${move} 5s infinite;
`;

export default AnimationTest;