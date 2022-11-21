import styled from "styled-components";

export const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
  alignitems: center;
  height: 400px;
  gap: 10px;
`;

export const GuestGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;

export const GuestGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr;
  grid-template-columns: 8fr 2fr;
  width: 100%;
  height: 100%;
  background-color: white;
  text-shadow: none;

 & > div {
  background-color: #FAEBD;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 10px;
  font-size: 10px;
  color: rgba(50, 50, 50, 0.9);
  user-select: none;
 }

 .title {
    border-top: 1px solid rgba(50, 50, 50, 0.5);
    border-left: 1px solid rgba(50, 50, 50, 0.5);
 }

  .delete {
    border-top: 1px solid rgba(50, 50, 50, 0.5);
    border-right: 1px solid rgba(50, 50, 50, 0.5);
    justify-content: center;
    cursor: pointer;
    transition: 0.1s;
    padding: 0;
    &:hover {
      color: white;
      background-color: red;
      transition: 0.1s;
    }
  }

  .author {
    grid-row: 2;
    grid-column: 1/3;
    border-top: 1px solid rgba(50, 50, 50, 0.5);
    border-left: 1px solid rgba(50, 50, 50, 0.5);
    border-right: 1px solid rgba(50, 50, 50, 0.5);
  }

  .content {
    text-align: left;
    align-items: flex-start;
    grid-row: 3 / 4;
    grid-column: 1/3;
    border: 1px solid rgba(50, 50, 50, 0.5);
  }
}
`;