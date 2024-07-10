import React from 'react';
import styled from 'styled-components';

import workpc4 from '../../../../assets/workpc4.png';
import ImgFem from '../../../../assets/icon-fem.png';
import ImgMasc from '../../../../assets/icon-masc.png';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  gap: 50px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Section = styled.section`
  background-color: #fff;
  /* padding: 50px; */
  border-radius: 8px;
  /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    text-align: left;
  }
`;

const Image = styled.img`
  /* width: 100%; */
  width: 400px;
  margin-bottom: 30px;

  @media screen and (max-width: 900px) {
    display: none;
    /* width: 400px;
    margin-bottom: 0; */
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  color: #242938;
  font-family: 'Mulish', sans-serif;
  font-size: 36px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h3`
  color: #071a25a8;
  font-family: 'Mulish', sans-serif;
  font-size: 28px;
  margin-bottom: 30px;
`;

const FeedbacksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const Feedback = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const FeedbackContent = styled.div`
  text-align: left;
`;

const FeedbackTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 0;
`;

const FeedbackStars = styled.span`
  display: flex;
  gap: 2px;
`;

const FeedbackText = styled.p`
  color: #636363;
  font-size: 15px;
  margin-top: 5px;
`;

const Button = styled.button`
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

export const FeedbacksClients: React.FC = () => {
  return (
    <Container>
      <Content>
        <Section>
          <Image src={workpc4} alt="Work PC" />
          <TextContent>
            <Title>Depoimentos</Title>
            <Subtitle>O que os clientes falam sobre nós</Subtitle>

            <FeedbacksContainer>
              <Feedback>
                <Avatar src={ImgFem} alt="Avatar" />
                <FeedbackContent>
                  <FeedbackTitle>
                    Fulana de Tal
                    <FeedbackStars>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </FeedbackStars>
                  </FeedbackTitle>
                  <FeedbackText>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus cumque dolor ea est quae alias necessitatibus."
                  </FeedbackText>
                </FeedbackContent>
              </Feedback>

              <Feedback>
                <Avatar src={ImgMasc} alt="Avatar" />
                <FeedbackContent>
                  <FeedbackTitle>
                    Fulano de Tal
                    <FeedbackStars>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </FeedbackStars>
                  </FeedbackTitle>
                  <FeedbackText>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus cumque dolor ea est quae alias necessitatibus."
                  </FeedbackText>
                </FeedbackContent>
              </Feedback>

              <Feedback>
                <Avatar src={ImgMasc} alt="Avatar" />
                <FeedbackContent>
                  <FeedbackTitle>
                    Fulano de Tal
                    <FeedbackStars>
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </FeedbackStars>
                  </FeedbackTitle>
                  <FeedbackText>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus cumque dolor ea est quae alias necessitatibus."
                  </FeedbackText>
                </FeedbackContent>
              </Feedback>
            </FeedbacksContainer>

            <Button>Se torne cliente</Button>
          </TextContent>
        </Section>
      </Content>
    </Container>
  );
};
