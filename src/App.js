import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';  

function App() {
  const [isSecond, setSecond] = useState(false)
  const [text, setText] = useState("GOOD")
 
  useEffect(() => {
    const a = setInterval(() => {
      console.log({text})
      setText(isSecond ? "GOOD" : "NICE");
      setSecond(isSecond ? false : true);
    }, 2000);
    return () => clearInterval(a);
  });

  return (
    <div className="logo_con">
      <div className="grid_con">
        <div className="item">
          <div className="prefix_name">{text}</div>
        </div>
        <div className="item">
          <div className="postfix_name">CHOI'S</div>
        </div>
        <div className="item">
          안녕하세요! 1년차 주니어 개발자 최영철라고 합니다!<br/>
          하루 하루 멋진 개발자가 되기 위해 노력하고 있습니다.<br/>
          <br/>
          Hello! I'm Yeongcheol Choi!<br/>
          I'm doing my best to improve myself as a software engineer with ✌️endless passion and ❤️enthusiasm.
        </div>
      </div>
    </div>
  );
}

export default App;
