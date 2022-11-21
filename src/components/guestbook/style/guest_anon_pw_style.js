import styled from "styled-components";

export const GuestAnon = styled.div`
  display: grid;
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

  .pwInputs {
    grid-row: 1;
    grid-column: 1/2;
    width: 100%;
  }

  .submitBtn {
    border-radius: 5px;
    grid-row: 2;
    grid-column: 1/2;
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
    grid-row: 2;
    grid-column: 1/2;
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

export const Input = styled.input`
  height: 100%;
  width: 100%;
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;