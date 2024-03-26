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
  max-width: 1280px;
  margin: auto;
  gap: 50px;
  
`


export const DivSujestoesImg = styled.div`
  flex: 1;
  margin: 0 auto;


  img {
    height: 100%;
  }    
  @media screen and (max-width: 1280px) {
    order: 1;
    img {

      height: 100%;
      width: 100%;
    }
  }
`;



export const DivContainerSujestoesText = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  text-align: left;
  justify-content: center;
  align-items: center;

  
  @media screen and (max-width: 1280px) {
    width: 80%;
  }
`;

export const DivSujestoesText = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1280px) {
    padding: 50px 0;
  }
`;

export const ContainerSujestoes = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-width: 100%;
  /* height: 600px; */
  margin-top: 100px;
  background-color: #3652CD20;
  border-radius: 18px;

  @media screen and (max-width: 1280px) {
    & {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  }

h6 {
  letter-spacing: 0.01em;
  color: #445781;
  font-size: 18px;
  font-weight: 400;


}
h2 {
  display: block;
  font-size: 35px;
  color: #1e266d;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: -0.01em;

}
`;


export const PrincipaisRecursos = styled.div`
  margin-top: 150px;
  h1 {
  font-weight: 700;
  font-size: 34px;
  color: #1e266d;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 0.01em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h6 {
  color: #445781;
  letter-spacing: 0.01;
  font-weight: 400;
  font-size: 18px;
}

h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #1e266d;
  margin-top: 40px;
  letter-spacing: 0.01em;
  line-height: 1.3;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

}
`;

export const ContainerDivMed = styled.div`

display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

export const DivMed = styled.div`

height: 200px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px 1px #888888;
  border-radius: 8px;
`;

export const MaisResultados = styled.div`
height: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-top: 100px;

font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

button:hover {
    color: #fff;
  }
`;

export const ButtonContato = styled.div`
  padding: 15px;
  background-color: #564BC6;
  font-weight: 800;
  color: #fff;
  width: 50%;
  text-align: center;
  border-radius: 8px;

  
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
  }
`;

export const MaisResultadosText = styled.div`
  width: 50%;
  height: 100%;
  text-align: left;
`;

export const MaisResultadosButton = styled.div`
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
