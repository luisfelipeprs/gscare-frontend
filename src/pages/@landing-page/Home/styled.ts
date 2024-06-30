import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 50px; */

  & > div {
    min-height: 100vh;
    display: flex;
  }
  @media screen and (max-width: 1300px) {
    /* padding: 15px; */
  }
`
