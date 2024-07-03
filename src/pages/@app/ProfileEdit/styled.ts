import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ProfileInfoContainer = styled.div`
  /* height: 90%; */
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    /* flex-wrap: wrap;     */
  }
`;

export const ProfileCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  flex: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex: 1;
    flex-wrap: wrap;
  }
`;

export const ProfileImage = styled.img`
  /* width: 150px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 19px 54px -46px rgba(0, 0, 0, 0.75);
  /* @media (max-width: 768px) {
    width: 100px;
  } */
`;

export const ContainerRight = styled.div`
  flex: 1;
`;

export const ContainerDataFloat = styled.div`
  
  flex: 1;
  display: flex;
  flex-direction: column;
  /* width: 30%; */
  a{
    color: #a0a0a0;
    text-decoration:none
  }
  a:hover{
    color: black;
  }
  @media (max-width: 768px) {
    width:100%
  }
`;

export const ContainerRightFirst = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* width: 30%; */
  a{
    color: #a0a0a0;
    text-decoration:none
  }
  a:hover{
    color: black;
  }
  @media (max-width: 768px) {
    width:100%
  }
`;

export const ContainerRightSecond = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* width: 30%; */
  a{
    color: #a0a0a0;
    text-decoration:none
  }
  a:hover{
    color: black;
  }
  @media (max-width: 768px) {
    width:100%
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 30%;
  a{
    color: #a0a0a0;
    text-decoration:none
  }
  a:hover{
    color: black;
  }
  @media (max-width: 768px) {
    width:100%
  }
`;


export const TwoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 30%;
  a{
    color: #a0a0a0;
    text-decoration:none
  }
  a:hover{
    color: black;
  }
  @media (max-width: 768px) {
    width:100%
  }
`

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 768px) {
   width: 100%;
  }
`;

export const AddPicture = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #F8F8F9;
  border-bottom: 1px solid #dddddd7a;
  padding: 15px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  button {  
    text-align: center;
    justify-content: center;
    display: flex;
    position: absolute;
    bottom: 50px;
    right: 70px;
    border: none;
    padding: 10px;
    border-radius: 50%;
    background: #1146ff;
    cursor: pointer;

    &:hover {
      background: #0e3cde;
    }

    svg {
      color: #fff;
    }
  }
`;



export const ContainerIconName = styled.div`
  /* margin: 15px; */
  align-items: center;
  justify-content: space-between;
  display: flex;
  gap: 20px;
  /* width: 100%; */
`

export const ContentImgAndName = styled.div`
  display: flex;
`;

export const ContentName = styled.div`
  
  & > div {
   gap: 3px;
  display: flex;
 }
`;

export const InfoProfile = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export const InfoProfileText = styled.div`
  color: #ddd;

  h3 {
    color: #324a83;
    font-size: 1.3rem;
  }
`;

export const InfoProfileDatas = styled.div`
  text-align: start;
  font-size: 0.9rem;
  font-family: monospace;
  font-weight: bold;
`;

export const RegistrationData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;


const piscar = keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: rgb(70, 255, 0);
  }
`;

export const ContainerCustomerTrackingEnabled = styled.div`
  position: relative;
  font-size: 1.1rem;
  font-family: sans-serif;
  color: #333;
  width: 100%;

  &::after {
    content: '';
    width: 10px; /* Ajuste a largura da bolinha conforme necessário */
    height: 10px; /* Ajuste a altura da bolinha conforme necessário */
    background-color: #ff0000; /* Cor da bolinha */
    border-radius: 50%; /* Para criar uma bolinha com bordas arredondadas */
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    animation: ${piscar} 1s infinite alternate; /* Animação de piscar */
  }
`;

export const CardData = styled.div`
  margin: auto 0;
  span {
    /* background: linear-gradient(166deg, #FFCE3A, #FFA700); */
    /* background: linear-gradient(166deg, rgb(0, 68, 203), rgb(44, 0, 156)); */
    background: #324a83;
    padding: 10px;
    border-radius: 8px;
    font-weight: 500;
    color: #fff;
  }
`;


export const ContainerButtonEditAccount = styled.div`
  text-align: center;
  justify-content: center;
  /* margin: auto; */
  display: flex;

  margin: auto 0;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: #fff;
  border: none;
  border-radius: 50%;
  background-color: rgb(255, 167, 0);
  cursor: pointer;
`;

export const ContainerNameAndNumberTel = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 20px;

  div {
    flex: 1;
    border-bottom: 2px solid #ddd;
    
    input {
      flex: 1;
      width: 100%;
      border: none;
    }
  }
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 20px;

  div {
    flex: 1;
    border-bottom: 2px solid #ddd;
    
    input {
      flex: 1;
      width: 100%;
      border: none;
    }
  }
`;


export const CardInfoAccountDatas = styled.div`
position: relative;
/* justify-content: space-between; */
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardInfoAboutAccountDatas = styled.div`
  flex: 1;
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardInfoAboutAccount = styled.div`
  flex: 1;
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderCardInfoAboutAccount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #F8F8F9;
  border-bottom: 1px solid #dddddd7a;
  padding: 15px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  h2 {
  color: #324a83;
  font-size: 1.05rem;
  font-weight: 500;
  }

  button {
      background-color: transparent;
  color: #000;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  }
`;

export const ContentCardInfoAboutAccount = styled.div`
  padding: 20px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 300px;

  

  /* Estilo da barra de rolagem */
  &::-webkit-scrollbar {
      width: 5px; /* largura da barra de rolagem */
  }

  /* Estilo do polegar da barra de rolagem */
  &::-webkit-scrollbar-thumb {
      background-color: #1F2C53; /* cor do polegar */
      border-radius: 5px; /* borda arredondada do polegar */
  }

  /* teste */
`;

export const CardInfoAccount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  @media (max-width: 768px) {
   flex-direction: column;
   gap: 30px;
  }
`;

export const CardInfo = styled.div`
  h3 {
    font-size: 1rem;
    font-family: monospace;
  }
  p {
    font-size: 0.8rem;
  }
`;


export const Interest = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  p{
    color: #a0a0a0;
  }
`;

export const ShowInterest = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
`;

export const AgroupInterest = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  /* height: 100%; Set the height to 100% */
`;


export const AvatarContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  gap: 10px;
  border: 1px solid black;
  /* height: 20%; */
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  margin-bottom: 40px;
  svg {
    width: 30px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
  }
`;


export const Person = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  font-weight: bold ;
`;
