import styled from "styled-components";


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  gap: 50px;
  
  @media screen and (max-width: 1280px) {
    width: 80%;
    margin: auto;
  }
`


export const Container = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: #fff; */
  /* padding-bottom: 100px; */
  display: flex;
`;

// export const Content = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   max-width: 1280px;
//   margin: auto;
//   gap: 50px;


//   @media screen and (max-width: 1280px) {
//     width: 80%;
//     margin: auto;
//   }
// `;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 32px;
  margin: auto;

  & > section {
    flex: 1;
    // max-width: calc(50% - 32px);
    // min-width: calc(50% - 32px);
  }

  @media screen and (max-width: 1280px) {
    & > section {
      max-width: calc(50% - 32px);
      min-width: calc(50% - 32px);
    }
  }

  @media screen and (max-width: 720px) {
    & > section {
      max-width: 100%;
      min-width: 100%;
    }
  }
`;
