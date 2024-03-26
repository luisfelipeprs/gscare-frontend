// import BoxInfo from "../../components/BoxInfo";
import BoxCardsNewTools from "../../../components/BoxCardsNewTools";
import Footer from "../../../components/Footer";
import PreFooter from "../../../components/PreFooter";
import Homepage from "../../../components/Homepage";
import Navbar from "../../../components/Navbar";
import QuestionCard from "../../../components/QuestionCard";
import { HomeContainer } from "./styled";
import BoxCardsTools from "../../../components/BoxCardsTools";
import BoxCardsServices from "../../../components/BoxCardsServices";
import { OverViewRecursos } from "../components/OverViewRecursos";
import { MobileRecursos } from "../components/MobileRecursos";
import { BotAcompanhamentoRecurso } from "../components/BotAcompanhamentoRecurso";
import { FraseDeEfeito } from "../components/FraseDeEfeito";
import { PrincipaisRecursos } from "../components/PrincipaisRecursos";
import { PerguntasFrequentes } from "../components/PerguntasFrequentes";
import LeadCaptureModal from "../components/LeadCaptureModal";
import { useState } from "react";

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
        <MobileRecursos />
        <BoxCardsNewTools />
        <BotAcompanhamentoRecurso />
        {/* <BoxCardsServices /> */}
        <PrincipaisRecursos />
        <BoxCardsTools />
        <FraseDeEfeito />
        <QuestionCard />
      </HomeContainer>
      <PreFooter />
      <Footer />
    </>
  )
}
export default Home;
