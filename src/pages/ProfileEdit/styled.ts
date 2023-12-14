import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const Content = styled.div`
  width: 80%;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-top: 20px;
  flex: 1;
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
  justify-content: center;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 50px;
  object-fit: cover;
  box-shadow: 2px 19px 54px -46px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const InputField = styled.input`
  display: flex;
  width: 500px;
  max-width: 500px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 270px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 16px;
  margin-top: 20px;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 100px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  resize: none;
`;

export const SaveButton = styled.button`
  padding: 10px 0; // Adjust the padding to 0 to occupy full width on mobile
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%; // Set the width to 100% on mobile
  }
`;