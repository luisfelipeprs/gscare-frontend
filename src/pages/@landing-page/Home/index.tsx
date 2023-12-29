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

function Home() {
  return (
      <>
        <Navbar/>
        <HomeContainer>
          <Homepage/>
          <BoxCardsNewTools/>
          <BoxCardsTools/>
          <BoxCardsServices />
          <QuestionCard />
        </HomeContainer>
        <PreFooter />
        <Footer />
      </>
    )
}
export default Home;
