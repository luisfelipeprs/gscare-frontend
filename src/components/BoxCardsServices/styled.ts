import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: #fff; */
  padding-bottom: 100px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  gap: 50px;
`
export const CardsContainer = styled.div`
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  margin: auto;
  gap: 32px;

  
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: space-around;
    section {
      max-width: calc(50% - 32px);
      min-width: calc(50% - 32px);
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: relative;
    section {
      width: 100%;
      max-width: 100%;
      /* padding: 50px 0; */
    }
  }
`