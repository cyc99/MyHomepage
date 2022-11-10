import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import AboutPage from "./About";

function SimpleSlider () {
    return (
      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'textShadow': 'grey 0px 0 0px'}}>
        최영철 <br/>
        Junior Software Engineer
        <img style = {{'height': '50%', 'width': '50%', 'margin': '30px', 'borderRadius': '30px'}}src={ require('./img.jpg') } />
      </div>
    );
}

const Box = styled.div`
  width: 20vw;
  height: 50vh;
  background-color: black;
  color: white;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 40px;
  width: 80%;
  height: 30%;
  color: #333;
  background: #419be0;
  text-align: center;
  border-radius: 30px;
`;

export default SimpleSlider;