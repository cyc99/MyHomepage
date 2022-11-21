import styled from "styled-components";
import Slider from "react-slick";

export const ProjectSlider = styled(Slider)`
  .slick-list {
    margin: 0 -2vw;
  }
  .slick-slide > div {
    padding: 0 2vw;
    place-items: center;
    display: grid;
  }
  .slick-prev,
  .slick-next {
    z-index: 50;
  }
`;

export const ProjectTitle = styled.div`
  font-weight: bolder;
  font-size: min(40px, 5vw);
  text-align: left;
  padding: 0 10px;
  text-shadow: grey 0px 0 0px;
`;

export const ProjectAdd = styled.div`
  position: absolute;
  background-color: RoyalBlue;
  border-radius: 5px;
  right: 3%;
  top: 3%;
  user-select: none;
  color: white;
  transition: 0.3s;
  &:hover {
    transform: scale(1.12);
    transition: 0.3s;
    background-color: RebeccaPurple;
  }
`;

export const ProjectDelete = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: min(32px, 3.2vw);
  color: white;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: DarkRed;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  top: 5vh;
  width: 70vw;
  height: 60vh;
  background-color: blue;
  padding: 5vw;
  border-radius: 30px;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(143, 125, 98, 0.363);
`;

export const LinkButton = styled.a`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: min(32px, 3.2vw);
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: DarkSeaGreen;
    transition: 0.5s;
  }
`;

export const ContentContainer = styled.div`
  height: 60vh;
  width: 60vw;
  display: grid;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-rows: 20% 65% 15%;
  grid-template-columns: 20% 40% 40%;

  .image {
    grid-row: 1 / 4;
    grid-column 1 / 2;
    height: 100%;
    width: 100%;
  }

  .title {
    grid-row: 1 / 2;
    grid-column 2 / 4;
    height: 100%;
    width: 100%;
  }

  .content {
    grid-row: 2 / 3;
    grid-column 2 / 4;
    height: 100%;
    width: 100%;
  }

  .link {
    grid-row: 3 / 4;
    grid-column 2 / 4;
    height: 100%;
    width: 100%;
  }

  .linkDelete {
    grid-row: 3 / 4;
    grid-column 2 / 3;
    height: 100%;
    width: 100%;
  }


  .delete {
    grid-row: 3 / 4;
    grid-column 3 / 4;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
  }

  .deleteComplete {
    grid-row: 3 / 4;
    grid-column 2 / 4;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */
  }
`;