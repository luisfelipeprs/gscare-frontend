import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  /* background-color: #fff; */
  /* padding-bottom: 100px; */
  margin: auto;
  display: flex;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30); */
  border-radius: 12px;
  /* height: 452px; */

  

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
export const BannerPrice = styled.div`
  text-align: center;
  margin-bottom: 50px;
  div {
    background-color: #242938;
    padding: 20px;
    border-radius: 12px;
    width: 100%;
    p {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 800;
      color: #fff;
    }
  }
`;

export const PricingContainer = styled.div`
  max-width: 1280px;
  display: flex;
  gap: 30px;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PricingCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 30%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &.recommended {
    border: 2px solid #e28800;
    /* &:before {
      content: "RECOMENDADO";
      position: absolute;
      top: -10px;
      left: -10px;
      background-color: #e28800;
      color: #fff;
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 3px;
      transform: rotate(-45deg);
      z-index: 1;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    } */
  }
`;

export const RecommendedTag = styled.div`
  background-color: #e28800;
  color: #fff;
  font-weight: bold;
  padding: 5px 35px;
  position: absolute;
  top: 43px;
  left: 6px;
  transform: translate(-25%, -25%) rotate(-45deg);
  z-index: 1;
  clip-path: polygon(19% 0, 81% 0, 100% 100%, 100% 50%, 100% 100%, 10% 100%, 0 100%, 0 100%);
`;


export const HighLight = styled.p`
  color: #071a25a8;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Price = styled.p<{ emphasis?: boolean }>`
  font-size: ${({ emphasis }) => (emphasis ? "32px" : "28px")};
  margin: 15px 0;
  color: ${({ emphasis }) => (emphasis ? "#e28800" : "#1F2C53")};
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BtnSelect = styled.button`
  font-weight: 800;
  width: 100%;
  text-align: center;
  background-color: #e28800;
  border: none;
  color: #fff;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d47300;
  }
`;
