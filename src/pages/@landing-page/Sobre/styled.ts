import styled from "styled-components";

export const ContainerSectionSobre = styled.section`
  max-width: 1280px;
  margin: auto;
`;

export const ContainerSobre = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    gap: 60px;
  }
`;


export const ContainerImagem = styled.div`
  position: relative;
  width: 500px;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const ContainerCaixaFaleConosco = styled.div`
  width: 100%;
  height: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0f0f0;
  margin-top: 100px;
  transition: 0.3s;
`;

export const CaixaFaleConosco = styled.div`
  background-image: url("https://www.swaytheme.com/wp-content/uploads/sites/3/2020/08/startup-bg.jpg?id=");
  background-size: cover;
  width: 100%;
  height: 600px;
`;

export const CaixaRecursosTextParte2 = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    width: 50%;

    @media screen and (max-width: 1120px) {
      font-size: 1.5rem;
      font-weight: 700;
      width: 80%;
    }
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 10px;
    background-color: #e28800;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #D08D04;
      cursor: pointer;
    }
  }
`;

export const ImagemDupla = styled.div`
  border-radius: 10px;
`;

export const Imagem2 = styled.img`
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: -50px;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

export const ContainerSobreLeft = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 1120px) {
    order: 1;
    margin: auto;
  }
`;

export const ContainerSobreRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContainerText = styled.div`
  h1 {
    color: #191970;
    font-size: 35px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    margin-top: 30px;
    color: #696969;
    letter-spacing: 0.01em;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

export const ContainerTextSobre = styled.div`
  width: 80%;
  h3 {
    color: #191970;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 1120px) {
    margin: auto;
    text-align: center;
  }
`;

export const ContainerSobreCaixa = styled.div`
  margin-bottom: 40px;

  p {
    color: #696969;
  }
`;


export const ImagemCaixa = styled.div`
  margin-right: 20px;

  img {
    width: 60px;
    border-radius: 100%;
  }
`

export const FeedbackCliente = styled.div`
  margin: 100px 20px;
`;

export const TituloFeedbackCliente = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  h1 {
    font-size: 34px;
    font-weight: 700;
    color: #071a25a8;
    text-align: center;
    margin-bottom: 20px;
  }

  h6 {
    color: #445781;
    font-size: 18px;
    text-align: center;
  }
`;

export const ContainerCaixaFeedback = styled.div`
  display: flex;
  flex-direction: row;
  /* margin: 20px; */
  justify-content: space-evenly;
  margin-top: 100px;
  
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;

export const ContentText = styled.div`
  justify-content: space-between;

  p {
    margin-bottom: 30px;
  }
`;


export const ContainerFeedbackCaixa = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 1;
  height: 20%;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 35px;

  p {
    color: #071a25a8;
    font-size: inherit;
    line-height: 1.6;
    font-size: 18px;
  }

`;

export const Nome = styled.span`
  color: #3FB8FF;
`;
