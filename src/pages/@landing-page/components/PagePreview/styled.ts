import styled from "styled-components";

export const CaixaRecursos = styled.div`
margin: 0 auto;
background-image: url("https://i0.wp.com/stenci.com.br/wp-content/uploads/2020/11/about-us-classic.jpg?fit=1920%2C450&ssl=2");
color: red;
width: 100%;
height: 370px;
`;

export const CaixaRecursosText = styled.div`
width: 100%;
height: 100%;
color: red;

display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  flex-direction: column;
  color: white;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: rgb(255, 255, 255);
  }

  .spans {
    display: flex;


  }

  .caixa-span {
    display: flex;
    flex-direction: row;
    color: white;

    .spans a {
      margin-right: 20px;
      text-decoration: none;
      color: white;

    }
  }
`

export const CaixaSpan = styled.div`
display: flex;
flex-direction: row;
color: white;
`

export const Spans = styled.span`
font-size: 1rem;
/* font-weight: 700; */
color: #fff;
margin-bottom: 20px;

display: flex;

a {
      margin-right: 20px;
      text-decoration: none;
      color: white;

    }`;
