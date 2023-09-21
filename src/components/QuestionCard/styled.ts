import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 100px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
  border-radius: 12px;
  height: 452px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContainerAction = styled.div`
  flex: 1;
  text-align: start;
  position: relative;
  max-width: max-content;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;

  div {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 12px 12px 0;
  }
`;
