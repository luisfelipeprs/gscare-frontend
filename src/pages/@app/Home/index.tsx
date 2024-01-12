import React from 'react';
import { ButtonInfos, CalendarIcon, Container, ContainerBlueBar, ContainerCharts, ContainerSectionsInfos, ContentBlueBar, DateText, GridWrapper, HeaderInfos, Information, SectionInfos, StyledDateContainer, StyledNameContainer, TitleInfos, WelcomeContaint, WelcomeParagraph, WelcomeTitle } from './styled';
import { DotsThreeVertical, House } from 'phosphor-react';
import helloWork from '../../../assets/helloWork.svg'
import CardAmountAndTile from '../../../components/CardAmountAndTile';
import LineChart from '../../../components/ChatsHomeAdmin/LineChart';
import ColumnChart from '../../../components/ChatsHomeAdmin/ColumnChart';



const data = [
  { title: 'Earnings (Monthly)', amount: '$40,000' },
  { title: 'Earnings (Monthly)', amount: '$40,000' },
  { title: 'Earnings (Monthly)', amount: '$40,000' },
  { title: 'Earnings (Monthly)', amount: '$40,000' },
];


// Componente principal
const Home: React.FC = () => {
  // Função para obter a data de hoje
  const getTodayDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return today.toLocaleDateString('pt-BR', options);
  };

  const chartData = [30, 40, 35, 50, 49, 60, 70, 91, 125];
  const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  const chartColumnData = {
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    title: 'Monthly Inflation in Argentina, 2002',
  };

  return (
    <Container>
      <ContainerBlueBar>
          <ContentBlueBar>
            <StyledNameContainer>
              <div>
                <House size={30} />
                <p>Dashboard</p>
              </div>
              <p className="info-text">veja as informações mais importantes</p>
            </StyledNameContainer>
            <StyledDateContainer>
              <CalendarIcon />
              <DateText>
                <span>Data:</span> 
                {getTodayDate()}
              </DateText>
            </StyledDateContainer>
          </ContentBlueBar>
      </ContainerBlueBar>
      <ContainerSectionsInfos>
        <SectionInfos>
          <WelcomeContaint>
            <WelcomeTitle>Bem vindos ao CarePlus!</WelcomeTitle>
            <WelcomeParagraph>
              Browse our fully designed UI toolkit! Browse our prebuilt app pages, components, and utilites, and be sure to look at our full documentation!
            </WelcomeParagraph>
            <img src={helloWork} alt="" />
          </WelcomeContaint>
        </SectionInfos>
        
        <SectionInfos>
          <HeaderInfos>
            <TitleInfos>Recent Activity</TitleInfos>
            <ButtonInfos><DotsThreeVertical size={20} /></ButtonInfos>
          </HeaderInfos>
          <Information>
          </Information>
        </SectionInfos>
        
        <SectionInfos>
          <HeaderInfos>
            <TitleInfos>Recent Activity</TitleInfos>
            <ButtonInfos><DotsThreeVertical size={20} /></ButtonInfos>
          </HeaderInfos>
          <Information>
          </Information>
        </SectionInfos>
      </ContainerSectionsInfos>

      {/* divs com dados de faturamento e outros numeros importantes */}
      <GridWrapper>
        {data.map((item, index) => (
          <CardAmountAndTile key={index} title={item.title} amount={item.amount} />
        ))}
      </GridWrapper>

      {/* graficos com dados da conta */}
      <ContainerCharts>
        <LineChart data={chartData} categories={chartCategories} />
        <ColumnChart data={chartColumnData.data} categories={chartColumnData.categories} title={chartColumnData.title} />
      </ContainerCharts>
    </Container>
  );
};

export default Home;