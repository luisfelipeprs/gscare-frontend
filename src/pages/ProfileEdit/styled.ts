import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3% 5%;
`;

export const Content = styled.div`

`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const MidContainer = styled.div`
  display: flex;
  width: 70%;
  @media (max-width: 768px) {
   width: 100%;
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
