import styled from "styled-components";

export const NewText = styled.textarea`
width: 100%;
height: 100%;
background-color: #f8f8f8;
border: 1px solid black;
border-radius: 3px;
font-size: 10px;
resize: none;
`;

export const Input = styled.input`
height: 100%;
width: 100%;
font-size: 10px;
background: white;
border: 1px solid black;
border-radius: 3px;
::placeholder {
  color: palevioletred;
}
`;

export const Uploader = styled.div`
height: 100%;
width: 100%;
display: grid;
overflow-x: hidden;
overflow-y: hidden;
grid-template-rows: 1fr 1fr 5fr 1fr 2fr;
grid-template-columns: 1fr 8fr 1fr;
grid-row-gap: 10px;
grid-column-gap: 10px;
user-select: none;
color: black;
font-size: 10px;

.submit {
  grid-row: 5 / 6;
  grid-column 1 / 6;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: DodgerBlue;
  transition: 0.3s;

  &:hover {
    background-color: DeepSkyBlue;
    transition: 0.3s;
  }
 }
}

.submitDisabled {
  grid-row: 5 / 6;
  grid-column 1 / 6;
  display: flex;
  align-items: center;
  color: white;
  cursor: normal;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: grey;
 }
}

.image {
  grid-row: 2 / 3;
  grid-column 1 / 2;
  height: 100%;
  text-align: right;
  width: 100%;
}

.inputImage {
  grid-row: 2 / 3;
  grid-column 2 / 3;
  height: 100%;
  width: 100%;
}
.inputImageBtn {
  grid-row: 2 / 3;
  grid-column 3 / 4;
  display: flex;
  border: 1px solid DeepSkyBlue;
  align-items: center;
  color: white;
  cursor: pointer;
  justify-content: center;
  height: 100%;
width: 100%;
background-color: DodgerBlue;
  transition: 0.3s;

  &:hover {
    background-color: DeepSkyBlue;
    transition: 0.3s;
  }
 }
}

.title {
  grid-row: 1 / 2;
  grid-column 1 / 2;
  height: 100%;
  text-align: right;
width: 100%;
}

.inputTitle {
  grid-row: 1 / 2;
  grid-column 2 / 4;
  height: 100%;
width: 100%;
}

.content {
  grid-row: 3 / 4;
  grid-column 1 / 2;
  height: 100%;
  text-align: right;
width: 100%;
}

.inputContent {
  grid-row: 3 / 4;
  grid-column 2 / 4;
  height: 100%;
width: 100%;
}

.link {
  grid-row: 4 / 5;
  grid-column 1 / 2;
  height: 100%;
  text-align: right;
  width: 100%;
}

.inputLink{
  grid-row: 4 / 5;
  grid-column 2 / 4;
  height: 100%;
  width: 100%;
} 
`;