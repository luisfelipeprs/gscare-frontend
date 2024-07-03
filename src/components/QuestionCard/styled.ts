import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  /* background-color: #fff; */
  /* padding-bottom: 100px; */
  margin: auto;
  display: flex;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  min-height: 600px;
  margin: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
  border-radius: 12px;
  /* height: 452px; */

  

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerAction = styled.div`
  flex: 1;
  text-align: start;
  position: relative;
  max-width: max-content;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
  justify-content: start;

  div {
    /* padding: 10%; */
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: start;
    
    h1 {
      width: 100%;
      color: #071a25a8;
      font-size: 2.5rem;
    }
  }
`;


export const DivSujestoesText = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
      width: 100%;
      color: #071a25a8;
      font-size: 2rem;
    }  

    h6 {
      
      width: 100%;
      font-weight: 500;
      font-size: 1rem;
    }

  @media screen and (max-width: 1280px) {
    padding: 50px 0;
  }
`;


export const ButtonContato = styled.div`
  
      border: none;
      padding: 15px;
      background-color: #FFA500;
      font-weight: 800;
      color: #fff;
      /* width: 60%; */
      text-align: center;
      border-radius: 8px;

      &:hover {
        cursor: pointer;
        background-color: #FFA500;
      }
    

  
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 12px 12px 0;
  }
`;
