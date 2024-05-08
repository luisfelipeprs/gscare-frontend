import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const HelpSection = styled.section`
  text-align: center;
  padding: 75px 20px 100px 20px;

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
`;

const HelpOptionsContainer = styled.div`
  border-radius: 8px;
  display: flex;
  overflow-x: auto;
  gap: 20px;
  /* padding: 10px; */
  /* max-height: 500px; */
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HelpOption = styled.div`
  text-align: center;
  /* padding: 20px; */
  min-height: 100%;
  min-width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-image: url(/src/assets/images-services/screen1.jpg);
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
    -webkit-line-clamp: 7;
    text-overflow: ellipsis;
    max-height: 8em;
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
          <HelpOption style={{ backgroundColor: '#E8D1AE' }}>
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
          <HelpOption style={{ backgroundColor: '#E8D1AE' }}>
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
          {/* Adicione mais HelpOption conforme necessário */}
        </HelpOptionsContainer>
      </SectionContainer>
    </HelpSection>
  );
};

export default HelpComponent;
