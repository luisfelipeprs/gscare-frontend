import styled from "styled-components";


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
  max-width: 1100px;
  margin: auto;
  gap: 50px;
  
  @media screen and (max-width: 1280px) {
    width: 80%;
    margin: auto;
  }
`

export const ConjuntoImagem = styled.div`
  position: relative;
`;


export const MaisResultados = styled.div`
  margin-top: 100px;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  justify-content: space-between;

  
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 50px;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #071a25a8;
    margin-bottom: 30px;
  }

  h6 {
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    font-size: 19px;
    font-weight: 400;
    color: #071a25a8;
    letter-spacing: 0.01em;
  }
`;

export const MaisResultadosText = styled.div`
  width: 50%;
  height: 100%;
  text-align: left;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const DivSujestoesImgFundo = styled.div`
  @media screen and (max-width: 1280px) {
    img {
      width: 100%;
    }
  }
`


export const MaisResultadosButton = styled.button`
  font-size: 16px;
  display: inline-flex;
  text-decoration: none;
  background: rgb(255, 255, 255);
  text-align: center;
  color: rgb(28, 28, 108);
  padding: 0 40px;
  box-sizing: border-box;
  border-radius: 5px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  width: max-content;
  overflow: hidden;
  border: 1px solid rgb(28, 28, 108);
  margin-top: 30px;
`;



export const MaisResultadosImg = styled.div`
  position: absolute;
  top: 10px;
  left: -50px;
  background-image: url(://i0.wp.com/www.swaytheme.com/wp-content/uploads/sites/3/2020/11/financial-5.jpg?resize=447%2C300&ssl=1);

  @media screen and (max-width: 1280px) {
    left: 0;
  }
`;



export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  margin: 20px;
  gap: 20px;
  margin-top: 80px;

  h5 {
    font-family: sans-serif;
    font-size: 1.2rem;
  }
  

  p {

    line-height: 35px;
    width: 60%;
    font-family: system-ui;
  }
    `;
