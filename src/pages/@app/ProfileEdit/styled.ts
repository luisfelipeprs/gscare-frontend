import styled from 'styled-components';

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
  height: 90%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;    
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 19px 54px -46px rgba(0, 0, 0, 0.75);
  /* @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  } */
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

export const AddPicture = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  svg{
    margin-top: 100px;
  }
`;

export const InfoName = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  p{
    font-size: 1.5rem;

  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 768px) {
   width: 100%;
  }
`;

export const CardInfoAccountDatas = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  flex: 1;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const CardInfoAboutAccountDatas = styled.div`
  flex: 1;
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  height: 480px;
  max-height: 500px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardInfoAboutAccount = styled.div`
  flex: 2;
  margin-bottom: 20px;
  background-color: #fff;
  box-sizing: border-box;
  height: 480px;
  max-height: 500px;
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
  color: #0061f2;
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
`;

export const CardInfoAccount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const CardData = styled.div`
  margin: auto 0;
  span {
    /* background: linear-gradient(166deg, #FFCE3A, #FFA700); */
    padding: 10px;
    border-radius: 8px;
    color: #fff;
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
  height: 100%; /* Set the height to 100% */
`;


export const AvatarContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  gap: 10px;
  border: 1px solid black;
  height: 20%;
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

