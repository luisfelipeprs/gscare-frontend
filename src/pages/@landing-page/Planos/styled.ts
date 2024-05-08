import styled from "styled-components";


export const Container = styled.div`
  width: 95%;
  /* background-color: #fff; */
  padding-bottom: 100px;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1280px;
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
  /* justify-content: center;
  display: flex; */
  /* margin: auto; */

  div {
    background-color: #3652cd;
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
  margin: 50px auto;
  max-width: 1280px;
  justify-content: center;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PricingCard = styled.div`
background-color: #fff;
border-radius: 8px;
box-shadow: 2px 1px 8px 2px rgba(0, 0, 0, 0.1);
padding: 20px;
margin: auto;
text-align: center;
width: 300px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
transition: all 0.50s;

&:hover {
  box-shadow: 2px 1px 8px 6px rgba(0, 0, 0, 0.1);
  width: 310px;
  height: 510px;
}


.recommended .btn-select {
  background-color: #fff;
  color: #0056b3;
  font-weight: bold;
}

.recommended .btn-select:hover {
  background-color: #e2e2e2;
  border-radius: 7px;
}

.recommended {
  transition: all 0.50s;
  box-shadow: 2px 1px 8px 2px rgba(0, 0, 0, 0.1);
  width: 310px;
  height: 510px;
}

.recommended:hover {
  box-shadow: 2px 1px 10px 6px rgba(0, 0, 0, 0.2);
  width: 320px;
  height: 520px;
}

.recommended,
.recommended h2,
.recommended .highlight {
  background-color: #0356A2;
  color: #fff;
  color: #007bff;
  font-weight: bold;
}


 h2 {
  color: #333;
}

`;

export const HighLight = styled.p`
/* background-color: #0356A2; */
color: #0356A2;
font-weight: 700;

`;


export const Price = styled.p`
  font-size: 24px;
  margin: 10px 0;
`;



export const Features = styled.ul`
list-style: none;
padding: 0;
text-align: center;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 20px;

li {
}

`;


export const BtnSelect = styled.button`
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
  background-color: #0056b3;
}
`;
