// import BoxInfo from "../../components/BoxInfo";
import BoxCardsNewTools from "../../../components/BoxCardsNewTools";
import Footer from "../../../components/Footer";
import PreFooter from "../../../components/PreFooter";
import Homepage from "../../../components/Homepage";
import Navbar from "../../../components/Navbar";
import QuestionCard from "../../../components/QuestionCard";
import { HomeContainer } from "./styled";
import BoxCardsTools from "../../../components/BoxCardsTools";
import { OverViewRecursos } from "../components/OverViewRecursos";
import { MobileRecursos } from "../components/MobileRecursos";
import { BotAcompanhamentoRecurso } from "../components/BotAcompanhamentoRecurso";
import { FraseDeEfeito } from "../components/FraseDeEfeito";
import { PrincipaisRecursos } from "../components/PrincipaisRecursos";
import LeadCaptureModal from "../components/LeadCaptureModal";
import { useState } from "react";
import { FeedbacksClients } from "../components/FeedbacksClients";
import { PerguntasFrequentes } from "../components/PerguntasFrequentes";
import Planos from "../Planos";

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
        <Homepage handleOpenModal={handleOpenModal} />
        <OverViewRecursos />
        {/* <MobileRecursos /> */}
        {/* <BoxCardsNewTools /> */}
        {/* <BotAcompanhamentoRecurso /> */}
        {/* <BoxCardsServices /> */}
        <PrincipaisRecursos />
        <BoxCardsTools />
        {/* <FraseDeEfeito /> */}
        <FeedbacksClients />
        <Planos />
        <QuestionCard />
        <PerguntasFrequentes />
      </HomeContainer>
      {/* <PreFooter /> */}
      <Footer />
    </>
  )
}
export default Home;
