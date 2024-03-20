import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #132E72; */
  color: black;
  
  @media screen and (max-width: 1280px) {
    display: none;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  padding-bottom: 100px;
  margin: auto;
  gap: 50px;
  width: 100%;
  p{
    font-weight: bold;
  }
  
  ul{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;
    list-style: none;
  }
  li{
    text-align: -webkit-match-parent;
    font-size: 12px;
    
  }
  a{
    color: #00a1e0;
    cursor: pointer;
    text-decoration: none;
  }

`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 5px; */
  gap: 30px;
  img{
    width: 50px;
    /* margin: 30px; */
    /* margin-top: 0; */
  }
  p{
    font-size: 1rem;
    color: #444444;
    /* margin: 30px; */
  } 
`
export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 230px ;
  /* margin: 10px 20px; */
`

export const Demo = styled.div`
  p{
    max-width: 200px;
    line-height: 30px;
    font-weight: bold;
    
  }
`
export const About = styled.div`

`
export const Links = styled.div`
`
