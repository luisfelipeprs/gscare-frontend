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
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  min-height: 550px;
  margin: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
  border-radius: 12px;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerAction = styled.div`
  flex: 1;
  text-align: start;
  position: relative;
  max-width: max-content;
  /* padding: 20px; */
  margin: auto;
  box-sizing: border-box;
  justify-content: start;

  
`;


export const DivSujestoesText = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

    @media screen and (max-width: 1000px) { 
    /* width: auto; */
    max-width: 600px;
    margin: auto;
  }
  @media screen and (max-width: 1280px) {
    padding: 50px 0;
  }
`;


export const ButtonContato = styled.div`
  
      border: none;
      padding: 15px;
      background-color: #e28800;
      font-weight: 800;
      color: #fff;
      /* width: 60%; */
      text-align: center;
      border-radius: 8px;

      &:hover {
        cursor: pointer;
        background-color: #e28800;
      }
    
      a {
        color: #fff;
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

  @media screen and (max-width: 1000px) { 
    /* width: auto; */
    max-width: 600px;
    margin: auto;
  }
`;



export const Functionalities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10;

  span {
    color: #292929;
    text-align: start;

    svg {  
      transform: translateY(20%);
      margin-right: 2px;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 320px) {
    & {
      gap: 10px;
    }
  }
  
`
