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
  gap: 32px;
  width: 100%;
  display: flex;
  margin: auto;

  section:nth-child(2) {
    /* margin: 0 15px; */
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* margin: auto; */
    /* padding: 20px; */
    position: relative;

    section {  
      width: 90%;
      max-width: 768px;
      margin: auto;
    }
  }
`