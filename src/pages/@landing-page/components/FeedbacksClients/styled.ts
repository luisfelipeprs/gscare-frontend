import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  gap: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Section = styled.section`
  background-color: #fff;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #071a25a8;
  font-family: 'Mulish', sans-serif;
  font-size: 36px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.h3`
  color: #071a25a8;
  font-family: 'Mulish', sans-serif;
  font-size: 28px;
  margin-bottom: 30px;
`;

export const FeedbacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const FeedbackContent = styled.div`
  text-align: left;
`;

export const FeedbackTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 0;
`;

export const FeedbackStars = styled.span`
  display: flex;
  gap: 2px;
`;

export const FeedbackText = styled.p`
  color: #636363;
  font-size: 15px;
  margin-top: 5px;
`;

export const Button = styled.button`
  padding: 15px;
  background-color: #e28800;
  font-weight: 800;
  color: #fff;
  width: 50%;
  text-align: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #c27600;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
