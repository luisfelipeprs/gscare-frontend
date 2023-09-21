import styled from "styled-components"

export const Container = styled.div`
  background-color: #032e61;
  color: white;
  
`

export const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 30px 10px;
`

export const Copyright = styled.div`
  font-size: 0.9rem;
  a{
    color: #00a1e0;
  }
`

export const FooterLinks = styled.div`
  padding-top: 20px;
  margin: 0;
  font-size: 0.8rem;
  cursor: pointer;
  ul{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    list-style: none;
  
  }
  li{
    text-align: -webkit-match-parent;
  }
  a{
    color: #00a1e0;
    cursor: pointer;
  }

`
