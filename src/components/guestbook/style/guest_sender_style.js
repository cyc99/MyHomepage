import styled from "styled-components";

export const Sender = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
width: 100%;
height: 100px;
align-items: center;
text-align: center;
height: 30%;
gap: 10px;

& > div {
  background-color: #FAEBD;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-size: 10px;
}

.anonCheck {
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  user-select: none;
}
.pwInputs {
  grid-row: 1;
  grid-column: 2/3;
  width: 100%;
}
.inputs {
  grid-row: 2;
  grid-column: 1/3;
  width: 100%;
}

.submitBtn {
  border-radius: 5px;
  grid-row: 3;
  grid-column: 1/3;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: DodgerBlue;
  width: 100%;
  height: 30px;
  user-select: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: DeepSkyBlue;
    transition: 0.3s;
  }
}
.submitBtnDisabled {
  border-radius: 5px;
  grid-row: 3;
  grid-column: 1/3;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: white;
  width: 100%;
  height: 30px;
  user-select: none;
}
`;

export const NewText = styled.textarea`
width: 100%;
height: 100%;
padding: 5px 5px;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 4px;
border: solid 2px #1e90ff;
background-color: #f8f8f8;
font-size: 10px;
resize: none;
`;

export const Input = styled.input`
height: 100%;
width: 100%;
background: white;
border: 1px solid black;
border-radius: 3px;
white-space: pre-line;
::placeholder {
  color: palevioletred;
}
`;