import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: #fff;
  padding: 10px 0;
  /* background-color: #4047d0; */
`

export const Navigationbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;

  &:hover{
    /* cursor: pointer; */
  }
  
  @media screen and (max-width: 1280px) {
    padding: 0 15px;
  }
`

export const Logo = styled.img`
  width: 100px;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  gap: 5px;

  a {
    font-size: 0.9rem;
    color: #2f368c;
  }

  p {
    font-size: 1rem;
    color: #2f368c;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Action = styled.div`
  display: flex;
  position: relative;
  gap: 20px;

  .linkButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    height: 50px;
    color: white;
    background-color: #137d00;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 5px 15px;
    text-decoration: none;
    margin: auto;

    &:hover {
      cursor: pointer;
      background-color: #238615;
      color: #e5e5e5;
    }
  }
`
export const Infos = styled.div`
  display: flex;

  ul{
    padding-left: 20px;
    margin: auto;
    display: flex;
    position: relative;
    list-style: none;

    li{
      color: #2f368c;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 0px 10px;
      justify-content: space-between;

      &:hover {
        cursor: pointer;
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }
  }
`

export const Notification = styled.div`
  background-color: #2C31B0;
  text-align: center;
  font-size: 0.8rem;
  h2 {
    padding: 10px 0;
    color: #fff;
  }
  @media screen and (max-width: 1280px) {
    /* background-color: red; */
    margin: auto;
    /* max-width: 100%; */
    padding: 0 20px;
  }
`
