import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: #ffff;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  background-color: blue;
  margin: auto;
  &:hover{
    /* cursor: pointer; */
  }
`
export const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;
  background-color: red;
  h1{
    text-align: start;
  }
  p{
    text-align: start;
  }  
  div{
    display: flex;
    button{
      border: none;
      border-radius: 10px;
      height: 50px;
      color: white;
      margin: auto;
      background-color: #137d00;
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
    width: 400px;
    height: 400px;
  }
  
`