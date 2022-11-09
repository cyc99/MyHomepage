import './AnimationTest.css';
import React, { useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import { useEffect, useState } from 'react'; 

const AnimationTest = () => {
  const ref = useRef()
  // const [idx, setIdx] = useState(1)

  useEffect (() => {
    const curr = ref.current

    const handler = (e) => {
      e.preventDefault()
      const innHeight = window.innerHeight
      const {deltaY} = e
      const {scrollTop} = curr
      console.log([scrollTop, innHeight])
      if (deltaY > 0) {
        if (scrollTop < innHeight * 0.9) {
          curr.scrollTo({
            top: innHeight,
            left: 0,
            behavior: "smooth",
          })
        } else if (scrollTop < innHeight * 1.9) {
          curr.scrollTo({
            top: innHeight * 2,
            left: 0,
            behavior: "smooth",
          })
        } else {
          curr.scrollTo({
            top: innHeight * 3,
            left: 0,
            behavior: "smooth",
          })
        }
      } else {
        if (scrollTop >= innHeight * 2.9) {
          curr.scrollTo({
            top: innHeight * 2,
            left: 0,
            behavior: "smooth",
          })
        } else if (scrollTop >= innHeight * 1.9) {
          curr.scrollTo({
            top: innHeight,
            left: 0,
            behavior: "smooth",
          })
        } else {
          curr.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      }
    }

    const resizeHandler = (e) => {
      e.preventDefault()
      const innHeight = window.innerHeight
      const {scrollTop} = curr
      if (scrollTop < innHeight * 0.5) {
        curr.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      } else if (scrollTop < innHeight * 1.5 && scrollTop >= innHeight * 0.5) {
        curr.scrollTo({
          top: innHeight,
          left: 0,
          behavior: "smooth",
        })
      } else if (scrollTop < innHeight * 2.5 && scrollTop >= innHeight * 1.5) {
        curr.scrollTo({
          top: innHeight * 2,
          left: 0,
          behavior: "smooth",
        })
      } else {
        curr.scrollTo({
          top: innHeight * 3,
          left: 0,
          behavior: "smooth",
        })
      }
    }

    curr.addEventListener('wheel', handler)
    window.addEventListener('resize', resizeHandler)

    return () => {
      curr.removeEventListener('wheel', handler)
      window.removeEventListener('resize', resizeHandler)
    }
  })

	return(
    <Outer ref={ref}>
      <Inner>1</Inner>
      <Inner2>2</Inner2>
      <Inner3>3</Inner3>
      <Inner4>4</Inner4>
    </Outer>
  )
}

const Inner = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
background: red;
`;

const Inner2 = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
background: blue;
`;
const Inner3 = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
background: green;
`;
const Inner4 = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
background: yellow;
`;


const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default AnimationTest;