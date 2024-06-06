import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const HelpSection = styled.section`
  text-align: center;
  /* padding: 75px 20px 100px 20px; */

  @media (max-width: 1000px) {
    padding: 75px 0px 100px 0px;
  }

  h2 {
    color: #564BC6;
    font-size: 2rem;
    font-family: inherit;
  }
`;

const SectionContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  height: 54vh;
`;

const SectionDivider = styled.hr`
  width: 50%;
  margin: 20px auto;
  border: none;
  border-bottom: 3px solid #868686;
`;

const PrevButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: #141e4b;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  height: 100%;

  @media (min-width: 800px) {
      display: none;
  }
`;

const NextButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: #141e4b;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  height: 100%;

  @media (min-width: 800px) {
      display: none;
  }
`;



const HelpOptionsContainer = styled.div`
  
  & {
    display: flex;
    gap: 20px;
    padding: 10px;
    max-height: 500px;
    height: 100%;
  }

  @media (max-width: 800px) {
    & {
      overflow-x: auto;
    }
  }

  @media (min-width: 800px) {
    & {
      flex-wrap: wrap;
      margin: auto;
      justify-content: center;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
  
`;


import ImageScreenOne from "./../../../../assets/screensistem1.webp";
import ImageScreenTwo from "./../../../../assets/screensistem2.webp";
import ImageScreenThree from "./../../../../assets/screensistem3.webp";
import ImageScreenFor from "./../../../../assets/screensistem4.webp";

const FeedbackCardFeedbackCard = styled.div`
  /* background-color: #000000; */
  position: relative;
  border-radius: 8px;
  justify-content: space-around;
  box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  

  & {
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
  }
  
  &:nth-child(1) {
    background-image: url(${ImageScreenOne}); 
  }

  &:nth-child(2) {
    background-image: url(${ImageScreenTwo}); 
  }

  &:nth-child(3) {
    background-image: url(${ImageScreenThree}); 
  }

  &:nth-child(4) {
    background-image: url(${ImageScreenFor}); 
  }

  @media (min-width: 800px) {
      min-width: 0;
      flex: 1 1 calc(50% - 50px);
      max-width: calc(50% - 50px);
      padding: 10px;
  }
`;


export const Overlay = styled.div`
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);/* Cor preta com 50% de opacidade */
  z-index: 0; /* Garante que fique sobre a imagem */
  backdrop-filter: blur(3px); 
`;

export const CardContentServices = styled.div`
z-index: 2;
`;

const FeedbackCardQuote = styled.div`
  width: 90%;
  font-family: sans-serif;
  margin: 0 auto;
  text-align: start;
  margin-bottom: 5px;
  font-size: 1.5rem;
  color: #eee;

  img {
    width: 50px;
  }
`

const FeedbackCardComment = styled.div`
  text-align: start;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  border-top: 1px solid #eee;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
`;

const FeedbackCardCustomerInfo = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const FeedbackCardCustomerPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FeedbackCardCustomerDetails = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeedbackCardCustomerName = styled.p`
  margin: 0;
  color: #131E3D;
  font-weight: bold;
`;

const FeedbackCardCustomerPosition = styled.p`
  font-size: 0.9rem;
  color: #131E3D;
`;

interface HelpOptionProps {
  backgroundImage: string;
}

const HelpOption = styled.div<HelpOptionProps>`
  text-align: center;
  min-height: 100%;
  min-width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;

  img {
    width: 50%;
    max-width: 500px;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.5rem;
    font-family: serif;
    color: #12153B;
  }

  p {
    /* color: #12153B; */
  }

  button {
    border-radius: 8px;
    border: none;
    padding: 10px;
    background-color: #AD8B5E;
    color: #fff;
    width: 50%;
    margin: 0 auto;
  }
`;

const ShadowDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #070b25a1;
  backdrop-filter: blur(3px); /* Adjust the blur radius as needed */
`;

const HelpOptionH3AndP = styled.div`
  
    padding: 10px 30px;
    text-align: start;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 75%;
    gap: 20px;
    /* width: auto; */
    height: 100%;
    margin: 0 auto;

    h3 {
      color: #e2e2ff;
      font-size: 2.7rem;
      font-family: inherit;
      font-weight: 600;
    }

  @media (max-width: 1000px) {
    padding: 10px 0px;

    h3 {
      font-size: 2rem;
    }
  }
`;

const LimitedParagraph = styled.p`
  color: #ffffff;
  font-family: inherit;
  font-weight: 500;

  font-size: 1.8rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  max-height: 6em;

  @media (max-width: 1000px) {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 6;
    text-overflow: ellipsis;
    max-height: 9em;
  }
`;

const HelpComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [scrollStep, setScrollStep] = useState<number>(0);

  useEffect(() => {
    const updateScrollStep = () => {
      const containerWidth = scrollContainerRef.current?.offsetWidth || 0;
      setScrollStep(window.innerWidth <= 500 ? containerWidth : containerWidth + 20);
    };

    updateScrollStep();

    window.addEventListener('resize', updateScrollStep);

    return () => window.removeEventListener('resize', updateScrollStep);
  }, []);

  const handleScroll = (amount: number) => {
    const newScrollAmount = Math.min(
      Math.max(scrollAmount + amount, 0),
      (scrollContainerRef.current?.scrollWidth || 0) - (scrollContainerRef.current?.clientWidth || 0)
    );
    setScrollAmount(newScrollAmount);
    scrollContainerRef.current?.scrollTo({
      top: 0,
      left: newScrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <HelpSection>
      <h2>Nossos serviços:</h2>
      <SectionDivider />
      <SectionContainer>

        <PrevButton onClick={() => handleScroll(-scrollStep)}>&#10094;</PrevButton>
        <NextButton onClick={() => handleScroll(scrollStep)}>&#10095;</NextButton>

        <HelpOptionsContainer ref={scrollContainerRef}>

          <FeedbackCardFeedbackCard>
            <Overlay></Overlay>
            <CardContentServices>
              <FeedbackCardQuote>
                <h3>Servico De:</h3>
              </FeedbackCardQuote>
              <FeedbackCardComment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aspernatur magnam dicta totam qui error pariatur officiis! Harum dolorum placeat incidunt eius facilis velit possimus quia quibusdam aliquid quasi.
              </FeedbackCardComment>
              {/* <FeedbackCardCustomerInfo>
                <FeedbackCardCustomerPhoto src={IconFem}
                  alt="Foto do Cliente" />
                <FeedbackCardCustomerDetails>
                  <FeedbackCardCustomerName>João Silva</FeedbackCardCustomerName>
                  <FeedbackCardCustomerPosition>Gerente de Projetos</FeedbackCardCustomerPosition>
                </FeedbackCardCustomerDetails>
              </FeedbackCardCustomerInfo> */}
            </CardContentServices>
          </FeedbackCardFeedbackCard>

          <FeedbackCardFeedbackCard>
            <Overlay></Overlay>
            <CardContentServices>
              <FeedbackCardQuote>
                <h3>Servico De:</h3>
              </FeedbackCardQuote>
              <FeedbackCardComment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aspernatur magnam dicta totam qui error pariatur officiis! Harum dolorum placeat incidunt eius facilis velit possimus quia quibusdam aliquid quasi.
              </FeedbackCardComment>
              {/* <FeedbackCardCustomerInfo>
                <FeedbackCardCustomerPhoto src={IconFem}
                  alt="Foto do Cliente" />
                <FeedbackCardCustomerDetails>
                  <FeedbackCardCustomerName>João Silva</FeedbackCardCustomerName>
                  <FeedbackCardCustomerPosition>Gerente de Projetos</FeedbackCardCustomerPosition>
                </FeedbackCardCustomerDetails>
              </FeedbackCardCustomerInfo> */}
            </CardContentServices>
          </FeedbackCardFeedbackCard>

          <FeedbackCardFeedbackCard>
            <Overlay></Overlay>
            <CardContentServices>
              <FeedbackCardQuote>
                <h3>Servico De:</h3>
              </FeedbackCardQuote>
              <FeedbackCardComment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aspernatur magnam dicta totam qui error pariatur officiis! Harum dolorum placeat incidunt eius facilis velit possimus quia quibusdam aliquid quasi.
              </FeedbackCardComment>
              {/* <FeedbackCardCustomerInfo>
                <FeedbackCardCustomerPhoto src={IconFem}
                  alt="Foto do Cliente" />
                <FeedbackCardCustomerDetails>
                  <FeedbackCardCustomerName>João Silva</FeedbackCardCustomerName>
                  <FeedbackCardCustomerPosition>Gerente de Projetos</FeedbackCardCustomerPosition>
                </FeedbackCardCustomerDetails>
              </FeedbackCardCustomerInfo> */}
            </CardContentServices>
          </FeedbackCardFeedbackCard>

          <FeedbackCardFeedbackCard>
            <Overlay></Overlay>
            <CardContentServices>
              <FeedbackCardQuote>
                <h3>Servico De:</h3>
              </FeedbackCardQuote>
              <FeedbackCardComment>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur aspernatur magnam dicta totam qui error pariatur officiis! Harum dolorum placeat incidunt eius facilis velit possimus quia quibusdam aliquid quasi.
              </FeedbackCardComment>
              {/* <FeedbackCardCustomerInfo>
                <FeedbackCardCustomerPhoto src={IconFem}
                  alt="Foto do Cliente" />
                <FeedbackCardCustomerDetails>
                  <FeedbackCardCustomerName>João Silva</FeedbackCardCustomerName>
                  <FeedbackCardCustomerPosition>Gerente de Projetos</FeedbackCardCustomerPosition>
                </FeedbackCardCustomerDetails>
              </FeedbackCardCustomerInfo> */}
            </CardContentServices>
          </FeedbackCardFeedbackCard>

        </HelpOptionsContainer>

        {/* <HelpOptionsContainer ref={scrollContainerRef}>

          <HelpOption style={{ backgroundColor: '#E8D1AE' }} backgroundImage={imgScreen1}>
            <ShadowDiv>
              <HelpOptionH3AndP>
                <h3>Negativa de Tratamento</h3>
                <LimitedParagraph>
                  Oferecemos suporte em casos em que planos de saúde negam tratamentos médicos necessários, garantindo que
                  os pacientes recebam a atenção adequada para sua saúde e bem-estar.
                </LimitedParagraph>
              </HelpOptionH3AndP>
            </ShadowDiv>
          </HelpOption>

          <HelpOption style={{ backgroundColor: '#E8D1AE' }} backgroundImage={imgScreen2}>
            <ShadowDiv>
              <HelpOptionH3AndP>
                <h3>Negativa de Tratamento</h3>
                <LimitedParagraph>
                  Oferecemos suporte em casos em que planos de saúde negam tratamentos médicos necessários, garantindo que
                  os pacientes recebam a atenção adequada para sua saúde e bem-estar.
                </LimitedParagraph>
              </HelpOptionH3AndP>
            </ShadowDiv>
          </HelpOption>

        </HelpOptionsContainer> */}

      </SectionContainer>
    </HelpSection>
  );
};

export default HelpComponent;
