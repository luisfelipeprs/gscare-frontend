// import BoxInfo from "../../components/BoxInfo";
import Footer from "../../../components/Footer";
import Homepage from "../../../components/Homepage";
import Navbar from "../../../components/Navbar";
import { HomeContainer } from "./styled";
import { BoxCardsTools } from '../../../components/BoxCardsTools/BoxCardsTools';
import { OverViewRecursos } from "../components/OverViewRecursos";
import LeadCaptureModal from "../components/LeadCaptureModal";
import { useState } from "react";
import { FeedbacksClients } from "../components/FeedbacksClients";
import { PerguntasFrequentes } from "../components/PerguntasFrequentes";
import Planos from "../Planos";
import Recursos from "../Recursos";
import QuestionCard from "../../../components/QuestionCard";

function Home () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar handleOpenModal={handleOpenModal} />
      <LeadCaptureModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <HomeContainer>
        <div id="home">
          <Homepage handleOpenModal={handleOpenModal} />
        </div>
        <div id="principais-recursos">
          <Recursos />
          {/* <ToolsOfSystem /> */}
          {/* <PrincipaisRecursos /> */}
        </div>
        <div id="box-cards-tools">
          <BoxCardsTools />
        </div>
        <div id="overview-recursos">
          <OverViewRecursos />
        </div>
        <div id="feedbacks-clients">
          <FeedbacksClients />
        </div>
        <div id="planos">
          <Planos />
        </div>
        <div id="question-card">
          <QuestionCard />
        </div>
        <div id="perguntas-frequentes">
          <PerguntasFrequentes />
        </div>

        {/* <MobileRecursos /> */}
        {/* <BoxCardsNewTools /> */}
        {/* <BotAcompanhamentoRecurso /> */}
        {/* <BoxCardsServices /> */}
        {/* <FraseDeEfeito /> */}
      </HomeContainer>
      {/* <PreFooter /> */}
      <Footer />
    </>
  )
}
export default Home;
