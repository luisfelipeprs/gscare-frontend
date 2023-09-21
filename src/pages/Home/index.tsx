// import BoxInfo from "../../components/BoxInfo";
import BoxInfo from "../../components/BoxInfo";
import Footer from "../../components/Footer";
import Homepage from "../../components/Homepage";
import Navbar from "../../components/Navbar";
import QuestionCard from "../../components/QuestionCard";
import { HomeContainer } from "./styled";

function Home() {
  return (
      <>
        <Navbar/>
          <HomeContainer>
            <Homepage/>
            <BoxInfo/>
            <QuestionCard />
          </HomeContainer>
        <Footer />
      </>
    )
}
export default Home;
