import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  width: 100%;
  text-align: center;
  background-color: #ffff;
  height: 100%;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  &:hover{
    /* cursor: pointer; */
  }
`
export const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: start;
  justify-content: space-around;
  margin: 20px 0;

  h1{
    text-align: start;
    color: #032D60;
    font-size: 2.7rem;
  }
  p{
    text-align: start;
    font-size: 1.3rem;
    color: #2d2d2d;
  }  
  div{
    display: flex;
    position: relative;
    gap: 50px;

    button{
      border: none;
      border-radius: 10px;
      height: 50px;
      color: white;
      margin: auto;
      background-color: #0176D3;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      padding: 5px 15px;
    }
  }
`
export const Rightdiv = styled.div`
  align-items: end;
  position: relative;
  img{
    height: 400px;
  }
  
`