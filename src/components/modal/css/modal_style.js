import styled from "styled-components";

export const ModalGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: white;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 30px 9fr 35px;
  border-radius: 15px;
  user-select: none;
  #title {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid rgba(50, 50, 50, 0.5);
  }
  #closeBtn {
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    font-size: 20px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  #content {
    color: rgba(0, 0, 0, 0.9);
    padding: 20px;
    grid-column: 1 / 3;
    grid-row: 2 / 4;
  }

  #contentBtn {
    color: rgba(0, 0, 0, 0.9);
    padding: 20px;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  #btn {
    display: grid;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    grid-template-columns: 1fr 3fr 3fr 1fr;
    height: 100%;
    color: rgba(0, 0, 0, 0.9);
    border-top: 1px solid rgba(50, 50, 50, 0.5);
    gap: 5px;
    #firstBtn {
      cursor: pointer;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      font-size: 15px;
      grid-column: 2 / 3;
      border-radius: 5px;
    }
    #secondBtn {
      cursor: pointer;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      font-size: 15px;
      grid-column: 3 / 4;
      border-radius: 5px;
    }
    #oneBtn {
      cursor: pointer;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 80%;
      font-size: 15px;
      grid-column: 2 / 4;
      border-radius: 5px;
    }
  }
`;