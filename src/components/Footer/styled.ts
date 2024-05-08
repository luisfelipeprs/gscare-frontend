import styled from "styled-components"

export const Container = styled.div`
  background-color: #3652cd;
  color: #fff;
  
`

export const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 30px 10px;
`

export const Copyright = styled.div`
  font-size: 0.9rem;
  a{
    font-size: 0.95rem;
    font-weight: bold;
    color: #f5f5f5;
    cursor: pointer;
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
    font-size: 0.95rem;
    font-weight: bold;
    color: #f5f5f5;
    cursor: pointer;
  }

`
