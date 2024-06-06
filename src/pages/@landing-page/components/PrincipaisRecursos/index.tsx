import { useEffect, useRef, useState } from 'react';
import {
  CardContentServices, CardDivider, Container, ContainerButtonCard, Content, FeedbackCardFeedbackCard, FeedbackCardQuote,
  HeaderContainer, HelpOptionsContainer, HelpSection, LimitedParagraph, NextButton,
  Overlay, PrevButton, SectionContainer, SectionDivider
} from "./styled";

export const PrincipaisRecursos = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [scrollStep, setScrollStep] = useState<number>(0);

  useEffect(() => {
    const updateScrollStep = () => {
      const containerWidth = scrollContainerRef.current?.offsetWidth || 0;
      setScrollStep(window.innerWidth <= 1000 ? containerWidth : containerWidth + 20);
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
    <Container>
      <Content>
        <HelpSection>
          <HeaderContainer>
            <h2>Nossos serviços:</h2>
            <SectionDivider />
          </HeaderContainer>
          <SectionContainer>
            <PrevButton onClick={() => handleScroll(-scrollStep)}>&#10094;</PrevButton>
            <NextButton onClick={() => handleScroll(scrollStep)}>&#10095;</NextButton>
            <HelpOptionsContainer ref={scrollContainerRef}>
              {[...Array(4)].map((_, index) => (
                <FeedbackCardFeedbackCard key={index}>
                  <Overlay></Overlay>
                  <CardContentServices>
                    <FeedbackCardQuote>
                      <h3>Servico De:</h3>
                    </FeedbackCardQuote>
                    <CardDivider />
                    <LimitedParagraph>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sit, at culpa corporis veniam eos officiis iusto reprehenderit consequuntur quisquam quis vero in odit repellat voluptate. Fugiat reiciendis molestiae aliquid.
                    </LimitedParagraph>
                    <ContainerButtonCard>
                      <button>Saber mais sobre</button>
                    </ContainerButtonCard>
                  </CardContentServices>
                </FeedbackCardFeedbackCard>
              ))}
            </HelpOptionsContainer>
          </SectionContainer>
        </HelpSection>
      </Content>
    </Container>
  );
};
