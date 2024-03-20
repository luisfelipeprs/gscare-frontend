import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`

export const Content = styled.div`
  max-width: 1280px;
  margin: auto;
  h1{
    font-family: inherit;
    font-size: 2.8rem;
    color: #FFA500;
    max-width: 1000px;
  }
  p{
    font-size: 1.2rem;
    color: #181818;
    max-width: 728px;
    margin: auto;
    padding: 20px 30px;
  }
`
